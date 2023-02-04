import Image from "next/image";

export default function ConnectionError() {
	return (
		<div className="flex flex-col items-center justify-center pb-10 min-h-[calc(100vh-80px)]">
			<Image
				src={"/connection_lost.png"}
				alt=""
				width={500}
				height={140}
			/>
			<h1 className="text-dark-blue text-[24px] max-w-[420px] text-center">
				Ooops! la connexion au serveur a échoué
			</h1>
			<h3 className="text-gray-500 text-[18px]  text-center">
				Vérifiez votre connexion internet et rafraîchissez la page
			</h3>
		</div>
	);
}
