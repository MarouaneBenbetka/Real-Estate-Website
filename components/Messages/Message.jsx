/* eslint-disable react-hooks/exhaustive-deps */
import { info } from "autoprefixer";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { useSpring, animated } from "react-spring";

export default function Message({ userJwt, infos }) {
	const [expand, setExpand] = useState(false);
	const [showExanpd, setShowExpand] = useState(false);
	const [seen, setSeen] = useState(infos.vue);
	const [formatedDate, setFormatedDate] = useState("");
	const [fullDate, setFullDate] = useState("");

	useEffect(() => {
		console.log(infos);
		const date = new Date(infos.date);

		const year = date.getFullYear();
		let month = date.getMonth() + 1;
		let dt = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();

		const currentDate = new Date();
		if (
			currentDate.getFullYear() === year &&
			currentDate.getMonth() + 1 === month &&
			currentDate.getDate() === dt
		) {
			if (dt < 10) dt = "0" + dt;
			if (month < 10) month = "0" + month;
			if (hours < 10) hours = "0" + hours;
			if (minutes < 10) minutes = "0" + minutes;

			setFormatedDate(`${hours}:${minutes}`);
		} else {
			if (dt < 10) dt = "0" + dt;
			if (month < 10) month = "0" + month;
			if (hours < 10) hours = "0" + hours;
			if (minutes < 10) minutes = "0" + minutes;

			setFormatedDate(`${year}-${month}-${dt}`);
		}
		setFullDate(`${year}-${month}-${dt} ${hours}:${minutes}`);
	}, []);
	const iconAnimation = useSpring({
		from: {
			transform: "rotate(0deg)",
		},
		to: {
			transform: expand ? "rotate(180deg)" : "rotate(0deg)",
		},
		config: { duration: "100" },
	});

	const onExpandMessage = () => {
		if (!seen) {
			setSeen(true);
			axios
				.put(
					"http://127.0.0.1:5000/messages/view",
					{ messageId: infos.id },
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${userJwt}`,
						},
					}
				)
				.catch((err) => {
					console.log(err);
				});
		}

		setExpand((prev) => !prev);
	};

	return (
		<div
			className={
				"border border-purple rounded-xl p-2 shadow-lg  relative cursor-pointer mb-5 " +
				(seen
					? " bg-gray-200 "
					: "  bg-purple bg-opacity-20 border-2 border-purple ")
			}
			onMouseEnter={() => setShowExpand(true)}
			onMouseLeave={() => setShowExpand(false)}
			onClick={onExpandMessage}
		>
			<div className="flex justify-start items-start">
				<div className="flex items-center mr-2">
					<div className="   flex items-center justify-center mr-2">
						<Image
							className="w-[48px] h-[48px] rounded-full  border-purple object-cover object-center"
							src={
								infos.photo
									? infos.photo
									: "profile-picture-placehoder.png"
							}
							alt="hi"
							width={48}
							height={48}
						/>
					</div>
					<h2
						className={
							"w-[190px] text-[18px] font-medium whitespace-nowrap overflow-hidden text-ellipsis " +
							(seen ? "" : " font-bold")
						}
					>
						{infos.name}
					</h2>
				</div>

				<p
					className={
						"hidden md:block text-[16px] text-gray-700 mt-[14px] flex-1 mr-8  overflow-hidden text-ellipsis" +
						(expand ? " mb-3" : " whitespace-nowrap") +
						(seen ? "" : " font-bold ")
					}
				>
					{infos.message}
				</p>
				<p
					className={
						"ml-auto w-[94px] mt-[14px] mr-2 font-bold text-purple " +
						(expand ? "text-center" : "text-right")
					}
				>
					{expand ? fullDate : formatedDate}
				</p>
				{showExanpd && (
					<animated.div
						className="absolute left-1/2 bottom-[-15px] border border-purple bg-white rounded-full hover:scale-[1.15] transition-all duration-100 z-50"
						style={iconAnimation}
					>
						<MdExpandMore size={22} color="#7065F0" />
					</animated.div>
				)}
			</div>
			{/* mobile version */}
			<p
				className={
					"block md:hidden text-[16px] px-3 text-gray-700 mt-[14px] flex-1   overflow-hidden text-ellipsis" +
					(expand ? " mb-3" : " whitespace-nowrap") +
					(seen ? "" : " font-bold ")
				}
			>
				{infos.message}
			</p>
		</div>
	);
}
