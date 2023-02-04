import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../utils/services/crud";

export default function Scrapping({ onCloseModal, onScrappingStateChanged }) {
	const handleScrapping = () => {
		onCloseModal();
		onScrappingStateChanged(true);
		axios
			.get(`${URL}/admin`)
			.then((res) => {
				onScrappingStateChanged(false);
				console.log(res);
				if (res.data.status === "success") {
					toast.success("Scrapping avec succes");
				} else {
					toast.error("Erreur lors du scrapping");
				}
			})
			.catch((err) => {
				onScrappingStateChanged(false);
				console.log(err);
				toast.error("Erreur lors du scrapping");
			});
	};

	return (
		<div className=" p-5  max-h-[95vh]">
			<div
				className={
					"w-[28px] h-[28px] rounded-full flex justify-center items-center absolute right-3 top-3 text-white cursor-pointer border-2 bg-[#d92525] border-[#d92525] hover:bg-white hover:text-[#d92525] hover:border-[#d92525] "
				}
				onClick={onCloseModal}
			>
				<p>✕</p>
			</div>
			<div className="flex flex-col justify-center items-center">
				<p className="text-[20px] my-4">
					Vous allez faire du scrapping sur deux sites différents
				</p>
				<div className="flex justify-center items-center gap-6">
					<a
						className="w-[200px] h-[90px] p-2  border-2 border-purple rounded-md flex justify-center items-center transition-all duration-100 ease-in-out hover:scale-[1.06] cursor-pointer"
						href="https://www.beytic.com/annonces-immobilieres/?_page=1"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="/beytic.png"
							width={160}
							height={120}
							alt="beytic website"
						/>
					</a>
					<a
						className=" w-[200px] h-[90px]  p-2  border-2 border-purple rounded-md flex justify-center items-center transition-all duration-100 ease-in-out hover:scale-[1.06] cursor-pointer"
						href="http://www.annonce-algerie.com/AnnoncesImmobilier.asp"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="/annonce_algerie.png"
							width={200}
							height={120}
							alt="annonce_algerie website"
						/>
					</a>
				</div>

				<button
					className={
						" mt-10  px-6 py-2 text-white2 text-[18px] bg-purple rounded-[8px] font-semibold border-2 border-purple transition hover:bg-white hover:text-purple  cursor-pointer"
					}
					onClick={handleScrapping}
				>
					Demarrer le scrapping
				</button>
				<p className="text-[14px] mt-1 text-gray-500">
					Cela peut prendre quelques minutes .
				</p>
			</div>
		</div>
	);
}
