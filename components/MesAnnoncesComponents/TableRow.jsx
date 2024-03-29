import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import annonceCrud from "../../utils/services/annonce";
import { typeImmobilierTOtypeAnnonce } from "../../data/data";

export default function TableRow({
	description,
	typeImmoblier,
	typeAnnonce,
	typePayment,
	prix,
	commune,
	wilaya,
	datePublication,
	image,
	id,
	canDelete,
}) {
	const { status, data: session } = useSession();
	const [isDeleted, setIsDeleted] = useState(false);
	// console.log(session);

	return (
		<>
			<tr className={"bg-white " + (isDeleted ? "hidden" : "")}>
				<td className="bg-white ">
					<div className="flex items-center space-x-3 w-fit	">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								{image && image.length > 0 ? (
									<Image
										src={image}
										width={40}
										height={40}
										alt="annonce"
										className="object-cover rounded-xl"
									/>
								) : (
									<Image
										src="/house-placeholder.png"
										width={40}
										height={40}
										alt="annonce"
										className="object-cover rounded-xl"
									/>
								)}
							</div>
						</div>
						<div>
							<div className="font-semibold	 max-w-[300px]  overflow-hidden text-ellipsis whitespace-nowrap ">
								{description}
							</div>
							<div className="text-sm opacity-50">
								{datePublication}
							</div>
						</div>
					</div>
				</td>
				<td className="bg-white">
					{typeAnnonce}
					<br />
				</td>
				<td className="bg-white">
					{typeImmoblier}
					<br />
				</td>
				<td className="bg-white">
					{commune}, {wilaya}
					<br />
				</td>

				<td className="bg-white text-dark-blue">
					<span className="  font-medium text-[20px]">
						{prix.toLocaleString("en-US")}
					</span>
					<span className="text-[16px] font-normal pr-1 pl-1">
						DA
					</span>
					{typeImmobilierTOtypeAnnonce[typeAnnonce.toLowerCase()] && (
						<span className="text-gray-500 text-[20px]">
							{" "}
							/{" "}
							{
								typeImmobilierTOtypeAnnonce[
									typeAnnonce.toLowerCase()
								]
							}
						</span>
					)}
				</td>
				<td className="bg-white flex gap-6 items-center mt-3">
					<Link href={"/Annonces/" + id} className="cursor-pointer">
						<FiExternalLink size={24} color="#000929" />
					</Link>
					<input
						type="checkbox"
						id={`my-modal${id}`}
						defaultChecked={false}
						className="modal-toggle"
					/>
					<div
						className="modal hero lg:min-w-xl"
						id={`my-modal-${id}`}
					>
						<div className="modal-box">
							<h3 className="font-bold text-lg">
								Voulez vous supprimer cette annonce !
							</h3>
							<p className="py-4 whitespace-normal">
								une fois que vous supprimer cette annonce vous
								ne pourez plus la recuperer
							</p>
							<div className="modal-action">
								<Link
									href=""
									scroll={false}
									replace={false}
									className="btn bg-purple border-purple confirm"
									onClick={(e) => {
										console.log(id, prix);
										console.log("------");
										try {
											const result = annonceCrud.remove(
												id,
												{
													headers: {
														Authorization: `Bearer ${session.user.jwt}`,
													},
												}
											);
											toast.success(
												"Annonce supprimee avec succès"
											);
											setIsDeleted(true);
										} catch {
											toast.error(
												"Erreur lors du supression"
											);
										}

										document
											.querySelector(
												`[id="my-modal${id}"]`
											)
											.click();
									}}
								>
									Confirmer
								</Link>
								<Link
									href=""
									replace={false}
									scroll={false}
									className="btn bg-[#d92525] border-[#d92525]"
									onClick={(e) => {
										document
											.querySelector(
												`[id="my-modal${id}"]`
											)
											.click();
									}}
								>
									Anuller
								</Link>
							</div>
						</div>
					</div>
					{canDelete && (
						<button
							onClick={(e) => {
								document
									.querySelector(`[id="my-modal${id}"]`)
									.click();
								// console.log(props.data);
								// document
								//   .querySelector(".confirm")
								//   .setAttribute("data", props.data);
								//add the modal of suppression to confirm eiher I will supress or not and fix the toast
								// add in igl the content of the about us page
							}}
						>
							<BiTrash
								size={26}
								color="#d92525"
								className="bg-white"
							></BiTrash>
						</button>
					)}
				</td>
			</tr>
		</>
	);
}
