import MesAnnoncesList from "../../components/MesAnnoncesComponents/MesAnnoncesList";
import { DUMMY_ANNOUNCES } from "../../data/data";
import { BiPlus } from "react-icons/bi";

export default function Annonces() {
	return (
		<div className="flex flex-col items-center justify-center  mx-4 sm:mx-10 md:mx-[3vw] lg:mx-[10vw] mt-8">
			<h1 className="font-bold text-[32px] md:text-[48px] text-black ml-4 text-center md:text-left border-purple pl ">
				Toutes les annonces
			</h1>
		</div>
	);
}
