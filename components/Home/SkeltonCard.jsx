import Image from "next/image";
import ContentLoader from "react-content-loader";

const y_offset = 6;

export default function SkeltonCard() {
	return (
		<div className="  h-[360px] w-[280px]  shadow-md  rounded-md overflow-hidden">
			<div
				// src="/house-placeholder.png"
				// alt="Image d'imoblier"

				className="bg-[#dcdada] h-[210px] w-full "
			/>
			<ContentLoader
				speed={2}
				width={290}
				height={140}
				viewBox="0 0 290 140"
				backgroundColor="#eae6e3"
				foregroundColor="#dcdada"
			>
				<rect x="20" y="10" rx="3" ry="3" width="88" height="12" />
				<rect x="20" y="28" rx="3" ry="3" width="52" height="12" />
				<rect x="20" y="54" rx="3" ry="3" width="250" height="12" />
				<rect x="20" y="72" rx="3" ry="3" width="250" height="12" />
				<rect x="20" y="90" rx="3" ry="3" width="146" height="12" />
				<rect x="20" y="116 " rx="3" ry="3" width="96   " height="12" />

				{/* <rect x="22" y="62" rx="3" ry="3" width="68" height="12" /> */}
			</ContentLoader>
		</div>
	);
}
