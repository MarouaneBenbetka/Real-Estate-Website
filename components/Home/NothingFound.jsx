import Image from "next/image";

export default function NothingFound() {
	return (
		<div className="flex flex-col items-center py-24">
			<Image
				src={"/search-empty-icon.png"}
				alt=""
				width={180}
				height={100}
			/>
			<h1 className="text-dark-blue text-[24px] max-w-[420px] text-center">
				Désolé, aucune correspondance trouvé pour votre recherche
			</h1>
			<h3 className="text-gray-500 text-[18px]  text-center">
				Veuillez essayer de chercher avec un autre terme
			</h3>
		</div>
	);
}
