import React, { useState } from "react";
import styles from "../../styles/NavBar.module.css";

export default function Navbar() {
	const [active, setActive] = useState(0);

	const navlinks = [
		{
			id: "rent",
			title: "Rent",
		},
		{
			id: "buy",
			title: "Buy",
		},
		{
			id: "sell",
			title: "Sell",
		},
		{
			id: "messages",
			title: "Messages",
		},
	];

	return (
		<div className="flex justify-between items-center   sm:px-8  py-4 md:px-4 lg:px-8">
			<div className="ml-4 font-bold text-[24px]">
				<h1>Real State</h1>
			</div>
			<ul className="hidden md:flex items-center gap-2 font-medium">
				{navlinks.map((navLink, index) => (
					<li
						key={index}
						className={
							"relative md:px-3 lg:px-5 cursor-pointer hover:text-purple transition duration-300 " +
							styles.navLink
						}
						onClick={(e) => {
							setActive(index);
							// e.preventDefault();
							console.log(index, active);
						}}
					>
						<a
							href={index === 0 ? "#" : `#${navLink.id}`}
							className={
								index === active
									? "text-[18px] text-purple font-semibold"
									: "text-[18px]"
							}
						>
							{navLink.title}
						</a>
					</li>
				))}
			</ul>
			<div className="hidden mr-3 md:flex items-center gap-4">
				<button className="px-4 py-2  text-purple rounded-[10px] font-semibold border-2 border-white2 hover:bg-dark hover:text-red transition">
					Login
				</button>
				<button className="px-4 py-2 text-white2 bg-purple rounded-[10px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition">
					Sign up
				</button>
			</div>
		</div>
	);
}
