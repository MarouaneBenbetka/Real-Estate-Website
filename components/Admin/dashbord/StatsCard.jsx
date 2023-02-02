export default function StatsCard({ name, icon, value, hexColor }) {
	return (
		<div
			className={
				"w-[260px] px-4 py-3  bg-opacity-20 rounded-xl shadow-md transition-all duration-100 ease-in-out hover:scale-[1.06] " +
				`bg-[${hexColor}]`
			}
			style={{ backgroundColor: hexColor + "20" }}
		>
			<div className="flex items-center">
				<div
					className={
						"w-[58px] h-[58px] rounded-full  bg-opacity-30 flex justify-center items-center mr-2"
					}
					style={{ backgroundColor: hexColor + "58" }}
				>
					{icon}
				</div>
				<div className="my-2">
					<p className="text-gray-500 text-[14px] whitespace-nowrap">
						Nombre des {name}
					</p>

					<p className="text-dark-blue text-[24px] font-semibold font-sans">
						{" "}
						{value}
					</p>
				</div>
			</div>
		</div>
	);
}
