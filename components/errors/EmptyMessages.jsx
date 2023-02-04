import Image from "next/image";

export default function EmptyMessages() {
	return (
		<div className="flex flex-col items-center py-24">
			<Image
				src={"/empty_mail_box.png"}
				alt=""
				width={180}
				height={100}
			/>
			<h1 className="text-dark-blue text-[24px] max-w-[420px] text-center">
				aucun message reçu
			</h1>
		</div>
	);
}
