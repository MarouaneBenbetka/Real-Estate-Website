/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CardsGrid from "../components/Home/CardsGrid";
import SearchBar from "../components/Home/SearchBar";
import { toast } from "react-toastify";
import PagesPagination from "../components/Home/PagesPagination";
import axios from "axios";
import NothingFound from "../components/errors/NothingFound";
import ConnectionError from "../components/errors/ConnectionError";
import { getSession } from "next-auth/react";
import { URL } from "../utils/services/crud";

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
	const [lastFilter, setLastFilter] = useState(null);

	useEffect(() => {
		if (lastFilter || lastSearch) {
			const url = lastFilter
				? `${URL}/annonces/search?q=${lastSearch}&min_date=${lastFilter.minDate}&max_date=${lastFilter.maxDate}&wilaya=${lastFilter.wilaya}&commune=${lastFilter.commune}&type=${lastFilter.type}&page=${pageCount}`
				: `${URL}/annonces/search?q=${lastSearch}&page=${pageCount}`;
			axios
				.get(`${url}`)
				.then((res) => {
					setConnectionError(false);
					setAnnounces(res.data.data);
					if (res.data.data.length == 0) setNoResultFound(true);
					else setNoResultFound(false);
					setMaxPages(res.data.max_pages);
					setIsLoading(false);
				})
				.catch((err) => {
					setConnectionError(true);
					setIsLoading(false);
				});
		} else {
			axios
				.get(`${URL}/annonces?page=${pageCount}`)
				.then((res) => {
					setConnectionError(false);
					setAnnounces(res.data.data);
					setMaxPages(res.data.max_pages);
					if (res.data.data.length == 0) setNoResultFound(true);
					else setNoResultFound(false);
					setIsLoading(false);
				})
				.catch((err) => {
					setConnectionError(true);
					setIsLoading(false);
				});
		}
	}, [pageCount]);

	useEffect(() => {
		if (toasting === "true") {
			toast.error("Vous devez etre authentifié");
		}
	}, [toasting]);

	// const [ann, SetAnn] = useState([]);
	// useEffect(async () => {
	// 	const result = await annonceCrud.getAll();
	// 	console.log(result);
	// }, [ann]);

	//search bar handler :

	const searchHandler = (e, searchText) => {
		setIsLoading(true);
		e.preventDefault();
		axios
			.get(`${URL}/annonces/search?q=${searchText}&page=${1}`)
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
				setPageCount(1);
				console.log(res.data);
				setIsLoading(false);
				setLastFilter(null);
			})
			.catch((err) => {
				setConnectionError(true);
				setIsLoading(false);
			});
	};

	const filterHandler = (e, filterData) => {
		console.log(filterData);
		e.preventDefault();
		axios
			.get(
				`${URL}/annonces/search?q=${lastSearch}&min_date=${
					filterData.dateDebut
				}&max_date=${filterData.dateFin}&wilaya=${
					filterData.wilaya
				}&commune=${filterData.commune}&type=${
					filterData.typeAnnonce
				}&page=${1}`
			)
			.then((res) => {
				setConnectionError(false);
				setAnnounces(res.data.data);
				if (res.data.data.length == 0) setNoResultFound(true);
				else setNoResultFound(false);
				setMaxPages(res.data.max_pages);
				setPageCount(1);
				console.log(res.data);
				setLastFilter({
					minDate: filterData.dateDebut,
					maxDate: filterData.dateFin,
					type: filterData.typeAnnonce,
					wilaya: filterData.wilaya,
					commune: filterData.commune,
				});
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

	try {
		const toasting = ctx.query.login || false;

		return {
			props: { toasting },
		};
	} catch {
		console.log("error");
	}
}
