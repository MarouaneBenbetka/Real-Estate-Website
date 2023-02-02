import MesAnnoncesList from "../../components/MesAnnoncesComponents/MesAnnoncesList";
import { DUMMY_ANNOUNCES } from "../../data/data";
import Scrapping from "../../components/Admin/annonces/Scrapping";
import { Modal } from "@mantine/core";
import { useState } from "react";

export default function Annonces() {
	const [modalOpened, setModalOpened] = useState(false);
	return (
		<div className="flex flex-col items-center justify-center  mx-4 sm:mx-10 md:mx-[3vw] lg:mx-[10vw] mt-8">
			<h1 className="font-bold text-[32px] md:text-[48px] text-black ml-4 text-center md:text-left border-purple pl ">
				Toutes les annonces
			</h1>

			<Modal
				opened={modalOpened}
				withCloseButton={false}
				onClose={() => setModalOpened(false)}
				size={560}
				centered
			>
				{/* Modal content */}
				<Scrapping onCloseModal={() => setModalOpened(false)} />
			</Modal>

			<button
				className={`btn bg-purple border-purple border-2 text-white hover:bg-white2 hover:text-purple hover:border-purple`}
				onClick={() => setModalOpened(true)}
			>
				Mise a jour annonces
			</button>

			<MesAnnoncesList mesannonces={DUMMY_ANNOUNCES} />
		</div>
	);
}
