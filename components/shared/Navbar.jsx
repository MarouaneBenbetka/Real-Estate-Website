import React, { useEffect, useState } from "react";
import styles from "../../styles/NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const navlinks = [
	{
		id: "explorer",
		title: "Explorer",
		link: "/",
	},
	{
		id: "mes_annonces",
		title: "Mes annonces",
		link: "/MesAnnonces",
	},
	{
		id: "messages",
		title: "Messages",
		link: "/Messages",
	},
];

const adminNavLinks = [
	{
		id: "dashbord",
		title: "Dashbord",
		link: "/Admin/Dashbord",
	},
	{
		id: "annonces",
		title: "Annonces",
		link: "/Admin/Annonces",
	},
];

export default function Navbar() {
	const { status, data: session } = useSession();
	const [active, setActive] = useState(0);
	const [navMobile, setNavMobile] = useState(false);
	const [nbNotifications, setNbNotifications] = useState(0);
	const [isAdmin, setIsAdmin] = useState(false);
	const router = useRouter();
	const currentRoute = router.pathname;

	const env = process.env.NODE_ENV;

	useEffect(() => {
		if (session) {
			axios
				.get(`http://127.0.0.1:5000/messages/unseen`, {
					headers: {
						Authorization: `Bearer ${session.user.jwt}`,
					},
				})
				.then((res) => {
					console.log(res);
					setNbNotifications(res.data.data);
				});
		} else {
			setNbNotifications(0);
		}
	}, []);

	const openAnimation = useSpring({
		from: { maxHeight: "0px" },
		to: { maxHeight: navMobile ? "1000px" : "0px" },
		config: { duration: "500" },
	});

	const pageNavigationHadler = (e, indexPage) => {
		setNavMobile(false);
		if (indexPage === active) e.preventDefault;
		setActive(indexPage);
	};
	const googleSSO = (e) => {
		e.preventDefault();
		signIn("google", {
			callbackUrl:
				env === "development"
					? "http://localhost:3000"
					: "https://glassdon.vercel.app",
		});
	};

	return (
		<div className="flex justify-between items-center    py-4 md:px-6 lg:px-8 border-b">
			<div className="w-[140px] h-[40px] ml-4 font-bold text-[24px] relative">
				<Image
					src="/logo_immo2.png"
					alt="IMMO_LOGO"
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>
			<ul className="hidden md:flex items-center gap-2 font-medium">
				{(isAdmin ? adminNavLinks : navlinks).map((navLink, index) => (
					<li
						key={index}
						className={
							"relative  cursor-pointer hover:text-purple transition duration-300 " +
							styles.navLink
						}
						onClick={(e) => {
							e.preventDefault();
							setActive(index);
						}}
					>
						<Link
							href={navLink.link}
							className={
								"md:px-3 lg:px-5 w-full  z-10" +
								(currentRoute === navLink.link
									? "text-[18px] text-purple font-semibold"
									: "text-[18px]")
							}
						>
							{navLink.title}
						</Link>
						{navLink.id === "messages" && nbNotifications > 0 && (
							<div className="absolute text-[12px] w-6 h-6 font-bold rounded-full bg-purple text-white top-[-8px] right-[-.8vw] flex items-center justify-center ">
								{nbNotifications}
							</div>
						)}
					</li>
				))}
			</ul>

			{status !== "unauthenticated" && status !== "loading" ? (
				<button
					onClick={() => {
						signOut({
							callbackUrl:
								env === "development"
									? "http://localhost:3000"
									: "https://glassdon.vercel.app",
						});
					}}
					className="hidden md:block px-4 py-2 text-white2 bg-purple rounded-[10px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition "
				>
					Logout
				</button>
			) : (
				<div className="hidden mr-3 md:flex items-center gap-4">
					<button
						className="px-4 py-2  text-purple rounded-[10px] font-semibold border-2 border-white2 transition hover:bg-purple hover:text-white hover:border-purple"
						onClick={(e) => {
							googleSSO(e);
							// toast.success("authentifie avec succes")
						}}
					>
						Login
					</button>
					<button
						className="px-4 py-2 text-white2 bg-purple rounded-[10px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition"
						onClick={(e) => {
							googleSSO(e);
						}}
					>
						Sign up
					</button>
				</div>
			)}
			{/* The mobile verion of the navbar  */}
			<div className=" block md:hidden relative cursor-pointer h-fit ">
				{navMobile ? (
					<FaTimes
						className="text-3xl mr-4"
						onClick={() => setNavMobile((prev) => !prev)}
					/>
				) : (
					<>
						<FaBars
							className="text-3xl mr-4"
							onClick={() => setNavMobile((prev) => !prev)}
						/>
						{nbNotifications > 0 && (
							<div className="absolute text-[12px]  w-3 h-3 rounded-full bg-purple text-white top-0 right-3  "></div>
						)}
					</>
				)}

				{navMobile && (
					<animated.div
						style={openAnimation}
						className={
							"absolute  flex flex-col z-50 justify-start items-center gap-4 bg-white2  rounded-lg px-8 pt-[4vh]  text-center top-10 right-0 w-screen h-fit py-4 overflow-hidden "
						}
					>
						<ul className="flex flex-col  text-dark-blue bg-white">
							{(isAdmin ? adminNavLinks : navlinks).map(
								(navLink, index) => (
									<li
										key={index}
										className="relative w-screen bg-white  focus:text-purple focus:bg-slate hover:text-purple hover:bg-gray-200 focus:bg-gray-200   rounded-lg focus:underline"
									>
										<Link
											href={navLink.link}
											className={
												"block p-4 w-full h-full  " +
												(currentRoute === navLink.link
													? "text-[18px] text-purple font-semibold"
													: "text-[18px]")
											}
											onClick={(e) =>
												pageNavigationHadler(e, index)
											}
										>
											{navLink.title}
										</Link>
										{navLink.id === "messages" &&
											nbNotifications > 0 && (
												<div className="absolute text-[12px] w-6 h-6 rounded-full bg-purple text-white font-bold top-[16px] right-[calc(50vw-70px)] flex items-center justify-center ">
													{nbNotifications}
												</div>
											)}
									</li>
								)
							)}
						</ul>
						<div className="flex gap-1">
							{status !== "unauthenticated" &&
							status !== "loading" ? (
								<>
									<button
										className="px-4 py-2 text-white2 bg-purple rounded-[10px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition"
										onClick={() => {
											signOut({
												callbackUrl:
													env === "development"
														? "http://localhost:3000"
														: "https://glassdon.vercel.app",
											});
										}}
									>
										logout
									</button>
								</>
							) : (
								<>
									<button
										className="px-4 py-2  text-purple rounded-[10px] font-semibold border-2 border-white2 hover:bg-dark hover:text-red transition"
										onClick={(e) => {
											googleSSO(e);
										}}
									>
										Login
									</button>
									<button
										className="px-4 py-2 text-white2 bg-purple rounded-[10px] font-semibold border-2 border-purple hover:bg-white hover:text-purple transition"
										onClick={(e) => {
											googleSSO(e);
										}}
									>
										Sign up
									</button>
								</>
							)}
						</div>
					</animated.div>
				)}
			</div>
		</div>
	);
}
