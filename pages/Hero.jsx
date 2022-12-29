import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import CardsGrid from "../components/Home/CardsGrid";
import DatePicker from "../components/Home/DatePicker";
import Selector from "../components/Home/Selector";
import TypeSelector from "../components/Home/TypeSelector";
import { annouces } from "./data";

export default function Hero() {
	const [showFilters, setShowFilters] = useState(false);
	const [pageCount, setPageCount] = useState(1);
	const maxPages = 10;

	const handleNext = (e) => {
		e.preventDefault();
		if (pageCount < maxPages) setPageCount(pageCount + 1);
	};
	const handlePrevious = (e) => {
		e.preventDefault();
		if (pageCount > 1) setPageCount(pageCount - 1);
	};
	const handlePageSelection = (e, num) => {
		e.preventDefault();
		setPageCount(num);
	};

	return (
		<div className="my-4 ">
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
				<div className=" mt-2 mb-4 flex gap-x-2 gap-y-[6px] justify-center items-end flex-wrap relative">
					<TypeSelector label="Type" />
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

			{/*Cards*/}
			<CardsGrid annouces={annouces} />
			{/*Cards pages slider*/}
			<div className="flex justify-center items-center mt-5 gap-1">
				<button onClick={(e) => handlePrevious(e)}>
					<MdOutlineNavigateBefore color="gray" size={22} />
				</button>

				{[...Array(maxPages - 1).keys()].map((i) => {
					if (i < 3 || i < pageCount)
						return (
							<div
								className={
									i + 1 === pageCount
										? "bg-dark-blue rounded-full text-white text-[16px] px-3 py-2  cursor-pointer transition-all duration-100"
										: "bg-white2 text-gray-500  text-[16px] px-3 py-2 transition-all  cursor-pointer"
								}
								key={i}
								onClick={(e) => handlePageSelection(e, i + 1)}
							>
								{i + 1}
							</div>
						);
				})}
				{pageCount < maxPages - 1 && <p className="text-purple">...</p>}
				<div
					className={
						maxPages === pageCount
							? "bg-dark-blue rounded-full text-white text-[16px] px-3 py-2  cursor-pointer"
							: "bg-white2 text-gray-500  text-[16px] px-2 cursor-pointer"
					}
					key={maxPages - 1}
					onClick={(e) => handlePageSelection(e, maxPages)}
				>
					{maxPages}
				</div>
				<button onClick={(e) => handleNext(e)}>
					<MdOutlineNavigateNext color="gray" size={22} />
				</button>
			</div>
		</div>
	);
}
