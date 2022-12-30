import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ImagesGalery from "../../components/CardDetails/ImagesGalery";
import { images } from "../data";

export default function CardDeatails() {
	const router = useRouter();
	const annonceId = router.query.annonceId;

	const announceDetails = {
		id: 9,
		typeImmoblier: "Appartement",
		typeAnnoce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		adresse: "cite 18 fevrier , BabaHassen , Alger",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		images: images,
	};

	return (
		<div className="mx-4 sm:mx-10 md:mx-[7vw] lg:mx-[8vw]  mt-3">
			{/* return to explore page */}
			<Link href="/">
				<div className="flex items-center gap-1 text-purple font-bold text-[22px] w-fit relative underlineAnimation ">
					<MdOutlineNavigateBefore color="#7065F0" size={30} />
					<div className="relative">
						<p>Retour</p>
					</div>
				</div>
			</Link>
			{/* title of the annouce */}
			<h1 className="text-dark-blue font-bold text-[36px] mt-4">
				{announceDetails.typeImmoblier}
			</h1>
			<h2 className="text-gray-600 text-[18px]">
				{announceDetails.adresse}
			</h2>

			{/* images galery */}
			<ImagesGalery />
		</div>
	);
}
