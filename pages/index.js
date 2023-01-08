import { useEffect, useState } from "react";
import CardsGrid from "../components/Home/CardsGrid";
import { annouces } from "../data/data";
import SearchBar from "../components/Home/SearchBar";
import { toast } from "react-toastify";
import PagesPagination from "../components/Home/PagesPagination";
import cookie from "js-cookie";
import axios from "axios";

export default function Explore({ toasting }) {
	const [pageCount, setPageCount] = useState(1);
	const maxPages = 10;

	if (toasting === "true") {
		toast.error("vous devez entre authentifiee");
	}

	//search bar handler :

	const searchHandler = (e, searchText) => {
		e.preventDefault();
		console.log(searchText);
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
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[3vw] lg:mx-[10vw]">
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

export async function getServerSideProps(ctx) {
	// const toasting = req.headers['toasting'] || false
	const toasting = ctx.query.login || false;
	console.log(toasting);

	return {
		props: { toasting },
	};
}
