import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import DatePicker from "../components/shared/DatePicker";
import Selector from "../components/shared/Selector";

export default function Hero() {
	const [showFilters, setShowFilters] = useState(false);

	return (
		<div className="mt-4">
			<h1 className="font-bold text-[32px]">Des immobiliers à louer</h1>
			{/* Search Bar  */}
			<div className="flex items-center">
				<div className="w-full relative flex flex-col  justify-center mr-4 ">
					<button type="submit" className="absolute right-3">
						<FiSearch size="30px" color="#7065F0" />
					</button>
					<div className="my-4">
						<input
							type="text"
							name="search"
							placeholder="Rechercher des immobiliers à louer"
							className="w-full pl-6 pr-12 py-3 placeholder-gray-500 rounded-xl border-white ring-2 ring-gray-300 focus:outline-purple focus:outline-none  "
							onClick={(e) => {
								e.preventDefault();
							}}
						/>
					</div>
				</div>
				<div
					className="cursor-pointer"
					onClick={() => setShowFilters(!showFilters)}
				>
					<VscSettings
						size="34px"
						className="rotate-90"
						color="#7065F0"
					/>
				</div>
			</div>

			{/* Filter Bar  */}
			{showFilters && (
				<div className=" mt-2 flex gap-x-2 gap-y-[6px] justify-center items-end flex-wrap relative">
					<Selector
						url={"https://restcountries.com/v2/all?fields=name"}
						label="Type"
					/>
					<Selector
						url={"https://restcountries.com/v2/all?fields=name"}
						label="Wilaya"
					/>
					<Selector
						url={"https://restcountries.com/v2/all?fields=name"}
						label="Commune"
					/>

					<DatePicker />

					<button className=" px-4 py-2 h-fit text-white bg-purple rounded-[10px] font-semibold border-2 border-purple border-white2 hover:bg-white2 hover:text-purple  transition">
						Filtrer
					</button>
				</div>
			)}
		</div>
	);
}
