/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineSell } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import StatsCard from "../../components/Admin/dashbord/StatsCard";
import UsersTable from "../../components/Admin/dashbord/UsersTable";
import { DUMMY_USERS } from "../../data/data";
import PagesPagination from "../../components/Home/PagesPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
const cards = [
	{
		id: "users",
		name: "utilisateurs",
		icon: <FiUsers color="#dfa511" size={28} />,
		value: 69,
		hex: "#dfa511",
	},
	{
		id: "visitors",
		name: "visiteurs",
		icon: <MdOutlineVisibility color="#7065F0" size={28} />,
		value: 420,
		hex: "#7065F0",
	},
	{
		id: "announces",
		name: "announces",
		icon: <MdOutlineSell color="#10d12d" size={28} />,
		value: 500,
		hex: "#10d12d",
	},
	// GrTransaction
	{
		id: "messages",
		name: "messages",
		icon: <BiChat color="#e9543a" size={28} />,
		value: 50,
		hex: "#e9543a",
	},
];

export default function Dashbord({ session }) {
	const [connectionError, setConnectionError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const [stats, setStats] = useState({
		users: 0,
		messages: 0,
		announces: 0,
		visitors: 0,
	});
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.NODE_ENV === "development" ? "http://127.0.0.1:5000" : "https://tpigl.onrender.com"}/admin/stats`, {
				headers: {
					Authorization: `Bearer ${session.user.jwt}`,
				},
			})
			.then((res) => {
				setConnectionError(false);
				setIsLoading(false);
				setStats({
					messages: res.data.data.messages_count,
					announces: res.data.data.annonces_count,
					users: 0,
					visitors: 0,
				});
			})
			.catch((err) => {
				setConnectionError(true);
				setIsLoading(false);
			});
		axios
			.get(`${process.env.NODE_ENV === "development" ? "http://127.0.0.1:5000" : "https://tpigl.onrender.com"}/annonces/${annonceId}/users/`)
			.then((res) => {
				setUsers(res.data.data);
				setStats((prev) => ({ ...prev, users: res.data.data.length }));
				setConnectionError(false);
				setIsLoading(false);
			})
			.catch((err) => {
				setConnectionError(false);
				setIsLoading(false);
			});
	}, []);

	const nextPageHandler = (e) => {
		e.preventDefault();
		// if (pageCount < maxPages) {
		// 	setPageCount((prevPageCount) => prevPageCount + 1);
		// 	window.scrollTo({
		// 		top: 0,
		// 		behavior: "smooth",
		// 	});
		// }
	};
	const previousPageHandler = (e) => {
		e.preventDefault();
		// if (pageCount > 1) {
		// 	setPageCount((prevPageCount) => prevPageCount - 1);
		// 	window.scrollTo({
		// 		top: 0,
		// 		behavior: "smooth",
		// 	});
		// }
	};
	const selectPageHandler = (e, num) => {
		e.preventDefault();
		// if (num != pageCount) {
		// 	setPageCount(num);
		// 	window.scrollTo({
		// 		top: 0,
		// 		behavior: "smooth",
		// 	});
		// }
	};
	return (
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[3vw] lg:mx-[10vw] mt-8">
			{/* stats */}
			<div className="w-full flex place-items-center sm:grid mx-auto gap-6 overflow-x-scroll sm:overflow-visible scrollbar-hide grid-cols-4 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 ">
				{cards.map((card) => {
					return (
						<StatsCard
							key={card.id}
							name={card.name}
							icon={card.icon}
							value={stats[card.id]}
							hexColor={card.hex}
						/>
					);
				})}
			</div>

			{/* table des utilisateur */}
			<h1 className="font-bold text-[32px] mt-8 mb-4">
				Table des utilisateurs
			</h1>
			{isLoading ? <p>loading</p> : users && <UsersTable users={users} />}

			{/* <PagesPagination
				maxPages={4}
				currentPage={1}
				onNextPageClick={nextPageHandler}
				onPreviousPageClick={previousPageHandler}
				onSelectionPageClick={selectPageHandler}
			/> */}
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
