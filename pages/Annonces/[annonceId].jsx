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
		adresse: "cite 18 fevrier , BabaHassen , Alger ",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		surface: 200,
		prix: 10000,
		typePayment: "jour",
		images: images,
	};

	const sideInfo = [
		{
			id: "typeImmoblier",
			title: "Type immoblier",
		},
		{
			id: "surface",
			title: "Surface",
		},
		{
			id: "wilaya",
			title: "Wilaya",
		},
		{
			id: "commune",
			title: "Commune",
		},
		{
			id: "adresse",
			title: "Adresse",
		},
	];

	return (
		<div className="mx-8 sm:mx-10 md:mx-[7vw] lg:mx-[8vw]  mt-3">
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

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
				{/* images galery */}
				<ImagesGalery />
				{/* Details de l'annonce */}
				<div className="ml-4 md:ml-10 flex flex-col justify-center max-w-[400px] mb-4 sm:mb-0">
					<h1 className="text-purple font-bold text-[28px] mb-4">
						Détails de l'annonce :
					</h1>
					<div className=" ml-12 flex flex-col justify-center gap-4 ">
						{sideInfo.map((item) => (
							<h2
								className="text-gray-700 text-[18px] break-words"
								key={item.id}
							>
								<span className="text-dark-blue font-semibold text-[22px] pr-3">
									{item.title} :
								</span>
								{announceDetails[item.id] +
									(item.id === "surface" ? "㎡" : "")}
							</h2>
						))}
					</div>
				</div>
				{/* Description */}
				<div>
					<h1 className="text-dark-blue font-semibold text-[28px] mt-4 mb-2">
						Description
					</h1>
					<p className="text-gray-600	text-[18px] max-w-[650px]">
						{announceDetails.description}
					</p>
				</div>
				{/* Prix et message */}
				<div className="w-full">
					<div className="flex  flex-col justify-center items-center ">
						<div className="ml-4 md:ml-10 mt-2 ">
							<span className="text-gray-500 font-semibold text-[18px]  leading-[8px] pr-4">
								Prix:
							</span>
							<span className=" text-purple font-bold text-[32px]">
								{announceDetails.prix.toLocaleString("en-US")}
							</span>
							<span className="text-purple text-[18px] font-normal pr-1">
								DA
							</span>

							{announceDetails.typePayment && (
								<span className="text-gray-500 text-[20px]">
									/ {announceDetails.typePayment}
								</span>
							)}
						</div>
						<textarea
							placeholder="Envoyer un message vers l'annonceur"
							className="bg-gray-300 p-2 w-full md:w-2/3 h-[200px] border  rounded border-purple text-dark-blue focus:border-2"
						></textarea>
						<button className="px-4 py-2 mt-2	 w-1/3 text-white2 bg-purple rounded-[4px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition">
							Envoyer Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
