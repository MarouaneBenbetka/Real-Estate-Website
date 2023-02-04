/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ImagesGalery from "../../components/CardDetails/ImagesGalery";
import dynamic from "next/dynamic";
import { images } from "../../data/data";
import axios from "axios";
import { findLocation } from "../../components/formComponents/ControlComponents/commune_lag_lng";
import {
	announcesRenameType,
	typeImmobilierTOtypeAnnonce,
	annoucesIcon,
} from "../../data/data";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import Image from "next/image";
import LoadingSpinner from "../../components/CardDetails/LoadingSpinner";
import ConnectionError from "../../components/errors/ConnectionError";

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
		id: "address",
		title: "Adresse",
	},
	{
		id: "date",
		title: "Date de publication",
	},
];

export default function CardDeatails({ session }) {
	//get the id of the announce
	const router = useRouter();
	const buttonRef = useRef();

	const [message, setMessage] = useState("");
	const [announceInfo, setAnnounceInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [connectionError, setConnectionError] = useState(false);

	// useEffect(() => {
	// 	if (announceInfo) {
	// 		buttonRef.current.disabled = true;
	// 		console.log(buttonRef.current);
	// 	}
	// }, [announceInfo]);

	useEffect(() => {
		setIsLoading(true);
		const annonceId = window.location.href.split("/").pop();
		axios
			.get(
				`${
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:5000"
						: "https://tpigl.onrender.com"
				}/annonces/${annonceId}`
			)
			.then((res) => {
				const data = res.data.data;
				if (!data.coordinates.latitude) {
					const lat_lng = findLocation(data.commune, data.wilaya);
					data.coordinates = {
						latitude: lat_lng.lat,
						longitude: lat_lng.lng,
					};

					if (!data.images || data.images.length === 0) {
						data.images = ["/house-placeholder.png"];
					}
				}
				setAnnounceInfo(data);
				console.log(data);
				setIsLoading(false);
				setConnectionError(false);
			})
			.catch((err) => {
				console.log(err);
				setConnectionError(true);
				setIsLoading(false);
			});
	}, []);

	const sendMessageHandler = () => {
		if (!session) {
			toast.error("vous devez etre authentifiee");
			return;
		}

		if (!announceInfo.userId) {
			toast.error(
				"Cette annonce est ajoute par l'administrateur vous ne pouvez pas envoyer des message"
			);
			return;
		}

		axios
			.post(
				`${
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:5000"
						: "https://tpigl.onrender.com"
				}/messages/ok`,
				{ annonceId: announceInfo.id, content: message },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${session.user.jwt}`,
					},
				}
			)
			.then((res) => {
				if (res.data.status === "failed") {
					toast.error(
						"Vous ne pouvez pas envoyer un message vers tois meme"
					);
				} else {
					toast.success("Evoie du message avec succes");
					setMessage("");
				}
			})
			.catch((err) => {
				toast.error("Erreur lors du l'envoie du message");
			});
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
			{isLoading ? (
				<LoadingSpinner />
			) : connectionError ? (
				<ConnectionError />
			) : (
				<>
					<h1 className="text-dark-blue font-bold text-[36px] mt-4">
						{announceInfo.typeAnnonce}
					</h1>
					<h2 className="text-gray-600 text-[18px]">
						{announceInfo.adress}
					</h2>

					{/*Grid 2x2  [images-infos][description - message]  */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
						{/* images galery */}
						<ImagesGalery
							images={
								announceInfo.images &&
								announceInfo.images.length > 0
									? announceInfo.images
									: ["/house-placeholder.png"]
							}
						/>
						{/* Details de l'annonce */}
						<div className=" md:ml-20 flex flex-col justify-center  max-w-[400px] mb-4 sm:mb-0">
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
										{item.id === "date"
											? new Date(announceInfo[item.id])
													.toISOString()
													.substring(0, 10)
											: announceInfo[item.id] +
											  (item.id === "surface"
													? "㎡"
													: "")}
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
								<div></div>
								<h2 className="mt-6 text-[18px] text-gray-500 mb-1">
									Propriétaire de l'annonce{" "}
								</h2>
								<div className="flex items-center gap-4">
									<Image
										width={72}
										height={72}
										className="w-[72px] h-[72px] rounded-full  border-purple object-cover object-center"
										src={
											announceInfo.ownerImage &&
											announceInfo.ownerImage.length > 0
												? announceInfo.ownerImage
												: "/profile-picture-placehoder.png"
										}
									/>
									<div>
										<h2 className="text-[20px] font-semibold leading-3 pb-1 mt-3 ">
											{announceInfo.contactInfo &&
											announceInfo.contactInfo.name
												? announceInfo.contactInfo.name
												: "admin"}
										</h2>
										<a
											href={
												"mailto:" +
												(announceInfo.contactInfo &&
												announceInfo.contactInfo.email
													? announceInfo.contactInfo
															.email
													: "")
											}
											target="_blank"
											rel="noreferrer"
										>
											<h3 className="text-gray-600 ">
												{announceInfo.contactInfo &&
												announceInfo.contactInfo.email
													? announceInfo.contactInfo
															.email
													: "/"}
											</h3>
										</a>

										<h3 className="text-gray-600 text-[14px] leading-3 pt-1">
											{announceInfo.contactInfo &&
											announceInfo.contactInfo.phoneNumber
												? announceInfo.contactInfo
														.phoneNumber
												: "00 00 00 00 00"}
										</h3>
									</div>
								</div>
							</div>
						</div>
						{/* Prix et message */}
						<div className="w-full mt-10 mb-auto">
							<div className="flex  flex-col justify-center items-center ">
								<div className="  mt-4 ">
									<span className="text-gray-500 font-semibold text-[18px]  leading-[8px] pr-4">
										Prix
									</span>
									<span className=" text-purple font-bold text-[32px]">
										{announceInfo.prix.toLocaleString(
											"en-US"
										)}
									</span>
									<span className="text-purple text-[18px] font-normal pr-1 pl-2">
										DA
									</span>

									{typeImmobilierTOtypeAnnonce[
										announcesRenameType[
											announceInfo.typeAnnonce.toLowerCase()
										]
									] && (
										<span className="text-gray-500 text-[20px]">
											{" "}
											/{" "}
											{
												typeImmobilierTOtypeAnnonce[
													announcesRenameType[
														announceInfo.typeAnnonce.toLowerCase()
													]
												]
											}
										</span>
									)}
								</div>
								<textarea
									placeholder="Envoyer un message vers l'annonceur"
									className="h-[100px] bg-gray-100 p-2  w-[76vw] md:w-2/3  border  rounded border-purple text-dark-blue focus:border-2 placeholder-gray-500"
									onChange={(e) => setMessage(e.target.value)}
									value={message}
								></textarea>
								<button
									ref={buttonRef}
									className=" px-4 py-2 mt-2	w-[76vw] md:w-2/3 text-white2 bg-purple rounded-[4px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition"
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

					<MapWrapper2
						lat={announceInfo.coordinates.latitude}
						lng={announceInfo.coordinates.longitude}
					/>
				</>
			)}
		</div>
	);
}

export async function getServerSideProps({ req }) {
	try {
		const session = await getSession({ req });

		return {
			props: { session },
		};
	} catch {
		console.log("error");
	}
}
