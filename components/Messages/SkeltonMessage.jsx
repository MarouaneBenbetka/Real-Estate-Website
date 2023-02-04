import Image from "next/image";
import ContentLoader from "react-content-loader";

const y_offset = 6;

export default function SkeltonMessage() {
	return (
		<div className="  rounded-xl shadow-md py-2  my-3">
			<ContentLoader
				speed={2}
				width={600}
				height={60}
				viewBox="0 0 600 60"
				backgroundColor="#eae6e3"
				foregroundColor="#dcdada"
			>
				<rect x="64" y="20" rx="3" ry="3" width="52" height="10" />
				<circle cx="33" cy="34" r="24" />
				<rect x="64" y="40" rx="3" ry="3" width="210" height="10" />
			</ContentLoader>
		</div>
	);
}
