import React, { useState } from "react";
import styles from "../../styles/NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

export default function Navbar() {
	const [active, setActive] = useState(0);
	const [navMobile, setNavMobile] = useState(false);

	const navlinks = [
		{
			id: "louer",
			title: "Louer",
		},
		{
			id: "acheter",
			title: "Acheter",
		},
		{
			id: "vendre",
			title: "Vendre",
		},
		{
			id: "messages",
			title: "Messages",
		},
	];

	const openAnimation = useSpring({
		from: { maxHeight: "0px" },
		to: { maxHeight: navMobile ? "1000px" : "0px" },
		config: { duration: "200" },
	});

	return (
		<div className="flex justify-between items-center    py-4 md:px-6 lg:px-8">
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

			{/* The mobile verion of the navbar  */}
			<div className="block md:hidden relative cursor-pointer ">
				{navMobile ? (
					<FaTimes
						className="text-3xl mr-4"
						onClick={() => setNavMobile(!navMobile)}
					/>
				) : (
					<FaBars
						className="text-3xl mr-4"
						onClick={() => setNavMobile(!navMobile)}
					/>
				)}

				<animated.div
					style={openAnimation}
					className={
						"absolute flex flex-col z-20 justify-start items-center gap-4 bg-white2 rounded-lg px-8 pt-[4vh]  text-center top-10 right-0 w-screen h-screen overflow-hidden"
					}
				>
					<ul className="flex flex-col text-dark-blue ">
						{navlinks.map((navLink, index) => (
							<li
								key={index}
								className="relative w-screen  focus:text-purple focus:bg-slate hover:text-purple hover:bg-[#d6d6d6] p-4 rounded-lg focus:underline"
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								<a
									href={index === 0 ? "#" : `#${navLink.id}`}
									className="w-full text-[20px]"
								>
									{navLink.title}
								</a>
							</li>
						))}
					</ul>
					<div className="flex gap-1">
						<button className="px-4 py-2  text-purple rounded-[10px] font-semibold border-2 border-white2 hover:bg-dark hover:text-red transition">
							Login
						</button>
						<button className="px-4 py-2 text-white2 bg-purple rounded-[10px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition">
							Sign up
						</button>
					</div>
				</animated.div>
			</div>
		</div>
	);
}
