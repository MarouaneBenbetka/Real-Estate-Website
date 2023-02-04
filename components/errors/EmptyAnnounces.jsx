import Image from "next/image";

export default function EmptyAnnounces() {
	return (
		<div className="flex flex-col items-center py-10">
			<Image src={"/no_data.png"} alt="" width={180} height={100} />
			<h1 className="text-dark-blue text-[24px] max-w-[420px] text-center">
				{`Vous n'avez pas encore publier des annonces`}
			</h1>
			<h3 className="text-gray-500 text-[18px]  text-center">
				Veuillez appuyer sur le boutton si dessus pour ajouter des
				annonces
			</h3>
		</div>
	);
}
