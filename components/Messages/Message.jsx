import { info } from "autoprefixer";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { useSpring, animated } from "react-spring";

export default function Message({ infos }) {
	const [expand, setExpand] = useState(false);
	const [showExanpd, setShowExpand] = useState(false);
	const [seen, setSeen] = useState(infos.vue);

	const iconAnimation = useSpring({
		from: {
			transform: "rotate(0deg)",
		},
		to: {
			transform: expand ? "rotate(180deg)" : "rotate(0deg)",
		},
		config: { duration: "100" },
	});

	return (
		<div
			className={
				"border border-purple rounded-xl p-2 shadow-xl  relative cursor-pointer mb-5 " +
				(seen
					? " bg-gray-200 "
					: "  bg-purple bg-opacity-20 border-2 border-purple ")
			}
			onMouseEnter={() => setShowExpand(true)}
			onMouseLeave={() => setShowExpand(false)}
			onClick={() => {
				setExpand((prev) => !prev);
				setSeen(true);
			}}
		>
			<div className="flex justify-start items-start">
				<div className="flex items-center mr-2">
					<div className="   flex items-center justify-center mr-2">
						<img
							className="w-[48px] h-[48px] rounded-full  border-purple object-cover object-center"
							src={infos.photo}
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
				<p className="ml-auto w-[94px] mt-[14px] mr-2 font-bold text-purple ">
					{infos.date}
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
