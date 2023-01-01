import { useState } from "react";
import CardsGrid from "../components/Home/CardsGrid";
import { annouces } from "../data/data";
import SearchBar from "../components/Home/SearchBar";
import PagesPagination from "../components/Home/PagesPagination";

export default function Explore() {
	const [pageCount, setPageCount] = useState(1);
	const maxPages = 10;

	//search bar handler :

	const searchHandler = (e, searchText) => {
		e.preventDefault();
		// console.log(searchText);
	};
	const filterHandler = (e, filterData) => {
		e.preventDefault();
		// console.log(filterData);
	};

	// pages navigation handlers :

	const nextPageHandler = (e) => {
		e.preventDefault();
		if (pageCount < maxPages)
			setPageCount((prevPageCount) => prevPageCount + 1);
	};
	const previousPageHandler = (e) => {
		e.preventDefault();
		if (pageCount > 1) setPageCount((prevPageCount) => prevPageCount - 1);
	};
	const selectPageHandler = (e, num) => {
		e.preventDefault();
		setPageCount(num);
	};

	return (
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[7vw] lg:mx-[11vw]">
			<div className="my-4 relative z-1">
				<h1 className="font-bold text-[32px]">Explorer nos annonces</h1>
				{/* Search Bar + Filter Bar */}
				<SearchBar onSearch={searchHandler} onFilter={filterHandler} />

				{/*Cards*/}
				<CardsGrid annouces={annouces} />
				{/*Cards pages slider*/}
				<PagesPagination
					maxPages={maxPages}
					currentPage={pageCount}
					onNextPageClick={nextPageHandler}
					onPreviousPageClick={previousPageHandler}
					onSelectionPageClick={selectPageHandler}
				/>
			</div>
		</div>
	);
}
