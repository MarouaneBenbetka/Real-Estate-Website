import { Oval } from "react-loader-spinner";
export default function LoadingSpinner() {
	return (
		<div className="min-h-[calc(100vh-142px)] pb-12 flex flex-col items-center justify-center">
			{" "}
			<Oval
				height={80}
				width={80}
				color="#7065F0"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="#a9a4df"
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
			<p className="pt-2 text-[18px]">Chargement en cours</p>
		</div>
	);
}
