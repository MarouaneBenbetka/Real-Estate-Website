import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineSell } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import StatsCard from "../../components/Admin/dashbord/StatsCard";
import UsersTable from "../../components/Admin/dashbord/UsersTable";
import { DUMMY_USERS } from "../../data/data";
import PagesPagination from "../../components/Home/PagesPagination";
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

export default function Dashbord() {
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
							value={card.value}
							hexColor={card.hex}
						/>
					);
				})}
			</div>

			{/* table des utilisateur */}
			<h1 className="font-bold text-[32px] mt-8 mb-4">
				Table des utilisateurs
			</h1>
			<UsersTable users={DUMMY_USERS} />
			<PagesPagination
				maxPages={4}
				currentPage={1}
				onNextPageClick={nextPageHandler}
				onPreviousPageClick={previousPageHandler}
				onSelectionPageClick={selectPageHandler}
			/>
		</div>
	);
}
