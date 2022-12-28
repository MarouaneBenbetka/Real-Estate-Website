import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ label, url }) => {
	const [countries, setCountries] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const [selected, setSelected] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCountries(data);
			});
	}, []);
	return (
		<div>
			<h2 className="mb-1 pl-2 text-[14px] font-normal text-purple relative">
				{label}
			</h2>
			<div
				className="w-28 md:w-52 font-semibold max-h-[320px]  cursor-pointer relative"
				onClick={() => setOpen(!open)}
			>
				<div
					className={`bg-white w-full p-2 flex items-center justify-between   placeholder-gray-500 rounded-md border-white ring-1 ring-gray-300 focus:outline-none ${
						!selected && "text-gray-500 "
					}`}
				>
					{selected
						? selected?.length > 25
							? selected?.substring(0, 25) + "..."
							: selected
						: label}
					<BiChevronDown
						size={20}
						className={`${open && "rotate-180"} cursor-pointer`}
						color="#7065F0"
					/>
				</div>
				<ul
					className={`bg-white mt-2 overflow-y-auto absolute ${
						open
							? "max-h-60 ring-2 ring-gray-300 rounded z-40"
							: "max-h-0"
					} `}
				>
					<div className="flex items-center px-2 sticky top-0 bg-white">
						<AiOutlineSearch
							size="18px"
							className="text-gray-500 w-4 h-4"
						/>
						<input
							type="text"
							value={inputValue}
							onChange={(e) =>
								setInputValue(e.target.value.toLowerCase())
							}
							placeholder=""
							className="placeholder:text-gray-500 p-2 outline-none w-full "
						/>
					</div>
					{countries?.map((country) => (
						<li
							key={country?.name}
							className={`p-2 text-sm hover:bg-purple hover:text-white transition-all duration-200 cursor-pointer
            ${
				country?.name?.toLowerCase() === selected?.toLowerCase() &&
				"bg-purple text-white"
			}
            ${
				country?.name?.toLowerCase().startsWith(inputValue)
					? "block"
					: "hidden"
			}`}
							onClick={() => {
								if (
									country?.name?.toLowerCase() !==
									selected.toLowerCase()
								) {
									setSelected(country?.name);
									setOpen(false);
									setInputValue("");
								}
							}}
						>
							{country?.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Selector;
