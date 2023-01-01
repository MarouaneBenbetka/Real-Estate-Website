import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export default function PagesPagination({
	maxPages,
	currentPage,
	onNextPageClick,
	onPreviousPageClick,
	onSelectionPageClick,
}) {
	return (
		<div className="flex justify-center items-center mt-5 gap-1">
			<button onClick={(e) => onPreviousPageClick(e)}>
				<MdOutlineNavigateBefore color="gray" size={22} />
			</button>

			{[...Array(maxPages - 1).keys()].map((i) => {
				if (i < 3 || i < currentPage)
					return (
						<div
							className={
								i + 1 === currentPage
									? "bg-dark-blue rounded-full text-white text-[16px] px-3 py-2  cursor-pointer transition-all duration-100"
									: "bg-white2 text-gray-500  text-[16px] px-3 py-2 transition-all  cursor-pointer"
							}
							key={i}
							onClick={(e) => onSelectionPageClick(e, i + 1)}
						>
							{i + 1}
						</div>
					);
			})}
			{currentPage < maxPages - 1 && maxPages > 3 && (
				<p className="text-purple">...</p>
			)}
			<div
				className={
					maxPages === currentPage
						? "bg-dark-blue rounded-full text-white text-[16px] px-3 py-2  cursor-pointer"
						: "bg-white2 text-gray-500  text-[16px] px-2 cursor-pointer"
				}
				key={maxPages - 1}
				onClick={(e) => onSelectionPageClick(e, maxPages)}
			>
				{maxPages}
			</div>
			<button onClick={(e) => onNextPageClick(e)}>
				<MdOutlineNavigateNext color="gray" size={22} />
			</button>
		</div>
	);
}
