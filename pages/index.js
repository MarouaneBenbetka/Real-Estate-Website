/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CardsGrid from "../components/Home/CardsGrid";
import SearchBar from "../components/Home/SearchBar";
import { toast } from "react-toastify";
import PagesPagination from "../components/Home/PagesPagination";
import axios from "axios";
import NothingFound from "../components/errors/NothingFound";
import ConnectionError from "../components/errors/ConnectionError";

const wait_function_test = async function test() {
	console.log("start timer");
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log("after 1 second");
};

export default function Explore({ toasting }) {
	const [pageCount, setPageCount] = useState(1);
	const [announces, setAnnounces] = useState(null);
	const [maxPages, setMaxPages] = useState(1);
	const [lastSearch, setLastSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [noResultFound, setNoResultFound] = useState(false);
	const [connectionError, setConnectionError] = useState(false);

	useEffect(() => {
		axios
			.get(`http://127.0.0.1:5000/annonces?page=${pageCount}`)
			.then((res) => {
				setConnectionError(false);
				setAnnounces(res.data.data);
				setMaxPages(res.data.max_pages);
				if (res.data.data.length == 0) setNoResultFound(true);
				else setNoResultFound(false);
				console.log(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setConnectionError(true);
				setIsLoading(false);
			});
	}, [pageCount]);

	useEffect(() => {
		if (toasting === "true") {
			toast.error("vous devez entre authentifiee");
		}
	}, []);

	// const [ann, SetAnn] = useState([]);
	// useEffect(async () => {
	// 	const result = await annonceCrud.getAll();
	// 	console.log(result);
	// }, [ann]);

	//search bar handler :

	const searchHandler = (e, searchText) => {
		e.preventDefault();
		axios
			.get(
				`http://127.0.0.1:5000/annonces/search?q=${searchText}&page=${pageCount}`
			)
			.then((res) => {
				setConnectionError(false);
				if (res.data.data) {
					setAnnounces(res.data.data);
					setPageCount(1);
					setLastSearch(searchText);
				}
				if (res.data.data.length == 0) setNoResultFound(true);
				else setNoResultFound(false);
				setMaxPages(res.data.max_pages);

				console.log(res.data);
			})
			.catch((err) => {
				setConnectionError(true);
			});
	};

	const filterHandler = (e, filterData) => {
		console.log(filterData);
		e.preventDefault();
		axios
			.get(
				`http://127.0.0.1:5000/annonces/search?q=${lastSearch}&min_date=${filterData.dateDebut}&max_date=${filterData.dateFin}&wilaya=${filterData.wilaya}&commune=${filterData.commune}&type=${filterData.typeAnnonce}&page=${pageCount}`
			)
			.then((res) => {
				setConnectionError(false);
				setAnnounces(res.data.data);
				if (res.data.data.length == 0) setNoResultFound(true);
				else setNoResultFound(false);
				setMaxPages(res.data.max_pages);
				console.log(res.data);
			})
			.catch((err) => {
				setConnectionError(true);
			});
	};

	// pages navigation handlers :

	const nextPageHandler = (e) => {
		e.preventDefault();
		if (pageCount < maxPages) {
			setPageCount((prevPageCount) => prevPageCount + 1);
			setIsLoading(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};
	const previousPageHandler = (e) => {
		e.preventDefault();
		if (pageCount > 1) {
			setPageCount((prevPageCount) => prevPageCount - 1);
			setIsLoading(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};
	const selectPageHandler = (e, num) => {
		e.preventDefault();
		if (num != pageCount) {
			setPageCount(num);
			setIsLoading(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[3vw] lg:mx-[10vw]">
			{connectionError ? (
				<ConnectionError />
			) : (
				<div className="my-4 relative z-1">
					<h1 className="font-bold text-[32px]">
						Explorer nos annonces
					</h1>
					{/* Search Bar + Filter Bar */}
					<SearchBar
						onSearch={searchHandler}
						onFilter={filterHandler}
					/>
					{noResultFound ? (
						<NothingFound />
					) : (
						<div>
							{/*Cards*/}
							<CardsGrid
								annouces={announces}
								isLoading={isLoading}
							/>
							{/*Cards pages slider*/}
							<PagesPagination
								maxPages={maxPages}
								currentPage={pageCount}
								onNextPageClick={nextPageHandler}
								onPreviousPageClick={previousPageHandler}
								onSelectionPageClick={selectPageHandler}
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export async function getServerSideProps(ctx) {
	// const toasting = req.headers['toasting'] || false
	const toasting = ctx.query.login || false;

	return {
		props: { toasting },
	};
}
