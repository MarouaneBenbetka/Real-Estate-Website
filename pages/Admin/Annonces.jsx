import MesAnnoncesList from "../../components/MesAnnoncesComponents/MesAnnoncesList";
import { DUMMY_ANNOUNCES } from "../../data/data";
import Scrapping from "../../components/Admin/annonces/Scrapping";
import { Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import axios from "axios";
import PagesPagination from "../../components/Home/PagesPagination";
import { Oval } from "react-loader-spinner";
import { URL } from "../../utils/services/crud";

export default function Annonces({ session }) {
	const [modalOpened, setModalOpened] = useState(false);
	const [pageCount, setPageCount] = useState(1);
	const [announces, setAnnounces] = useState(null);
	const [maxPages, setMaxPages] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [connectionError, setConnectionError] = useState(false);
	const [scrappingEncours, setScrappingEncours] = useState(false);

	useEffect(() => {
		axios
			.get(`${URL}/admin/annonces?page=${pageCount}`, {
				headers: {
					Authorization: `Bearer ${session.user.jwt}`,
				},
			})
			.then((res) => {
				setConnectionError(false);
				setAnnounces(res.data.data);
				setMaxPages(res.data.max_pages);

				setIsLoading(false);
				console.log(res.data);
				console.log("hi");
			})
			.catch((err) => {
				setConnectionError(true);
				setIsLoading(false);
				console.log("2");
			});
	}, [pageCount]);

	// pages navigation handlers :

	const nextPageHandler = (e) => {
		e.preventDefault();
		if (pageCount < maxPages) {
			setPageCount((prevPageCount) => prevPageCount + 1);
			setIsLoading(true);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	};
	const previousPageHandler = (e) => {
		e.preventDefault();
		if (pageCount > 1) {
			setPageCount((prevPageCount) => prevPageCount - 1);
			setIsLoading(true);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	};
	const selectPageHandler = (e, num) => {
		e.preventDefault();
		if (num != pageCount) {
			setPageCount(num);
			setIsLoading(true);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	};
	return (
		<div className="flex flex-col items-center justify-center  mx-4 sm:mx-10 md:mx-[3vw] lg:mx-[10vw] mt-8">
			<h1 className="font-bold text-[32px] md:text-[48px] text-black ml-4 text-center md:text-left border-purple pl ">
				Toutes les annonces
			</h1>

			<Modal
				opened={modalOpened}
				withCloseButton={false}
				onClose={() => setModalOpened(false)}
				size={560}
				centered
			>
				{/* Modal content */}
				<Scrapping
					onCloseModal={() => {
						setModalOpened(false);
					}}
					onScrappingStateChanged={(value) =>
						setScrappingEncours(value)
					}
				/>
			</Modal>

			<button
				className={
					`btn bg-purple border-purple border-2 text-white` +
					(scrappingEncours
						? "bg bg-gray-700 border-gray-700 cursor-wait"
						: ` hover:bg-white2 hover:text-purple hover:border-purple`)
				}
				onClick={() => {
					scrappingEncours
						? console.log("scrapping en cours")
						: setModalOpened(true);
				}}
			>
				{scrappingEncours ? (
					<div className="flex gap-4 items-center justify-center">
						<p>Scrapping en cours</p>
						<Oval
							height={24}
							width={24}
							color="#8065F0"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
							ariaLabel="oval-loading"
							secondaryColor="#a9a4df"
							strokeWidth={4}
							strokeWidthSecondary={4}
						/>
					</div>
				) : (
					"Mise a jour des annonces"
				)}
			</button>
			{scrappingEncours && (
				<p className="text-[14px] mt-1 text-gray-500">
					Cela peut prendre quelques minutes .
				</p>
			)}
			<div className="max-w-[100vw] overflow-x-auto">
				<MesAnnoncesList
					mesannonces={announces}
					canDelete={false}
					isLoading={isLoading}
				/>
			</div>
			<PagesPagination
				maxPages={maxPages}
				currentPage={pageCount}
				onNextPageClick={nextPageHandler}
				onPreviousPageClick={previousPageHandler}
				onSelectionPageClick={selectPageHandler}
			/>
		</div>
	);
}

export async function getServerSideProps({ req }) {
	try {
		const session = await getSession({ req });

		if (!session) {
			return {
				redirect: {
					destination: "/?login=true",
					permanent: false,
				},
			};
		}

		return {
			props: { session },
		};
	} catch {
		console.log("error");
	}
}
