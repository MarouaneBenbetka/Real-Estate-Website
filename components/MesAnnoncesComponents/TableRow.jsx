import React from "react";
import { BiTrash } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

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
}) {
	const { status, data: session } = useSession();
	console.log(session);

	return (
		<>
			<tr className="bg-white ">
				<td className="bg-white ">
					<div className="flex items-center space-x-3 w-fit	">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<Image
									src={image}
									width={40}
									height={40}
									alt="annonce"
									className="object-cover rounded-xl"
								/>{" "}
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
					<span className="text-gray-500 text-[18px]">
						/ {typePayment}
					</span>
				</td>
				<th className="bg-white flex gap-6 items-center">
					<Link href={"/Annonces/" + id} className="cursor-pointer">
						<FiExternalLink size={24} color="#000929" />
					</Link>
					<button
						onClick={(e) => {
							document.querySelector('[id="my-modal2"]').click();
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
				</th>
			</tr>
		</>
	);
}
