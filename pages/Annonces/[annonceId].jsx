import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ImagesGalery from "../../components/CardDetails/ImagesGalery";
import dynamic from "next/dynamic";
import { images } from "../../data/data";

const MapWrapper2 = dynamic(
	() => import("../../components/CardDetails/MapWrapper"),
	{
		ssr: false,
	}
);

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
	{
		id: "datePublication",
		title: "Date de publication",
	},
];

export default function CardDeatails() {
	const router = useRouter();
	const annonceId = router.query.annonceId; //get the id of the announce
	const [message, setMessage] = useState("");
	const [announceInfo, setAnnounceInfo] = useState({
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
		datePublication: "01-01-2023",
		ownerName: "Houari Boumedian",
		ownerImg:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		ownerEmail: "km_benbetka@gmail.com",
		ownerPhone: "07 38 48 29 38",
	});

	const sendMessageHandler = () => {
		// console.log(message, "is been sent");
	};

	return (
		<div className="mx-8 sm:mx-10 md:mx-[7vw] lg:mx-[8vw]  mt-3">
			{/* return to explore page */}
			<div onClick={() => router.back()} className="cursor-pointer">
				<div className="flex items-center gap-1 text-purple font-bold text-[22px] w-fit relative underlineAnimation ">
					<MdOutlineNavigateBefore color="#7065F0" size={30} />
					<div className="relative">
						<p>Retour</p>
					</div>
				</div>
			</div>
			{/* title of the annouce */}
			<h1 className="text-dark-blue font-bold text-[36px] mt-4">
				{announceInfo.typeImmoblier}
			</h1>
			<h2 className="text-gray-600 text-[18px]">
				{announceInfo.adresse}
			</h2>

			{/*Grid 2x2  [images-infos][description - message]  */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
				{/* images galery */}
				<ImagesGalery />
				{/* Details de l'annonce */}
				<div className=" md:ml-10 flex flex-col justify-center max-w-[400px] mb-4 sm:mb-0">
					<h1 className="text-purple font-bold text-[28px] mb-4">
						Détails de l'annonce :
					</h1>
					<div className=" ml-4 md:ml-12 flex flex-col justify-center gap-3 ">
						{sideInfo.map((item) => (
							<h2
								className="text-gray-700 text-[18px] break-words"
								key={item.id}
							>
								<span className="text-dark-blue font-semibold text-[22px] pr-3">
									{item.title} :
								</span>
								{announceInfo[item.id] +
									(item.id === "surface" ? "㎡" : "")}
							</h2>
						))}
					</div>
				</div>
				{/* Description + contact infos*/}
				<div>
					<div>
						<h1 className="text-dark-blue font-semibold text-[28px] mt-4 mb-2">
							Description
						</h1>
						<p className="text-gray-600	text-[18px] max-w-[650px]">
							{announceInfo.description}
						</p>
						<h2 className="mt-6 text-[18px] text-gray-500 mb-1">
							Propriétaire de l'annonce{" "}
						</h2>
						<div className="flex items-center gap-4">
							<img
								className="w-[72px] h-[72px] rounded-full  border-purple object-cover object-center"
								src={announceInfo.ownerImg}
							/>
							<div>
								<h2 className="text-[20px] font-semibold leading-3 pb-1 mt-3 ">
									{announceInfo.ownerName}
								</h2>
								<a
									href={"mailto:" + announceInfo.ownerEmail}
									target="_blank"
									rel="noreferrer"
								>
									<h3 className="text-gray-600 ">
										{announceInfo.ownerEmail}
									</h3>
								</a>

								<h3 className="text-gray-600 text-[14px] leading-3 pt-1">
									{announceInfo.ownerPhone}
								</h3>
							</div>
						</div>
					</div>
				</div>
				{/* Prix et message */}
				<div className="w-full">
					<div className="flex  flex-col justify-center items-center ">
						<div className="ml-4 md:ml-10 mt-4 ">
							<span className="text-gray-500 font-semibold text-[18px]  leading-[8px] pr-4">
								Prix
							</span>
							<span className=" text-purple font-bold text-[32px]">
								{announceInfo.prix.toLocaleString("en-US")}
							</span>
							<span className="text-purple text-[18px] font-normal pr-1 pl-2">
								DA
							</span>

							{announceInfo.typePayment && (
								<span className="text-gray-500 text-[20px]">
									/ {announceInfo.typePayment}
								</span>
							)}
						</div>
						<textarea
							placeholder="Envoyer un message vers l'annonceur"
							className="h-[100px] bg-gray-300 p-2 w-full md:w-2/3  border  rounded border-purple text-dark-blue focus:border-2 placeholder-gray-500"
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							className=" px-4 py-2 mt-2	 w-2/3 text-white2 bg-purple rounded-[4px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition"
							onClick={sendMessageHandler}
						>
							Envoyer Message
						</button>
					</div>
				</div>
			</div>
			{/* map location */}
			<h1 className="text-dark-blue font-semibold text-[28px] mt-10 mb-2">
				Position sur la carte
			</h1>
			<MapWrapper2 />
		</div>
	);
}
