import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export default function PagesPagination({
	maxPages,
	currentPage,
	onNextPageClick,
	onPreviousPageClick,
	onSelectionPageClick,
}) {
	if (maxPages > 1)
		return (
			<div className="flex justify-center items-center mt-5 ">
				<button onClick={(e) => onPreviousPageClick(e)}>
					<MdOutlineNavigateBefore color="gray" size={26} />
				</button>
				<div className=" max-w-[80vw] overflow-x-scroll relative">
					<div className="flex justify-center items-center  gap-2	py-4 w-fit">
						{[...Array(maxPages - 1).keys()].map((i) => {
							if (i < 3 || i < currentPage)
								return (
									<div
										className={
											"text-[16px] w-[36px] h-[36px] font-sans font-normal cursor-pointer flex justify-center items-center " +
											(i + 1 === currentPage
												? "bg-dark-blue rounded-full text-white    transition-all duration-100"
												: "bg-white text-gray-500   transition-all  ")
										}
										key={i}
										onClick={(e) =>
											onSelectionPageClick(e, i + 1)
										}
									>
										<p>{i + 1}</p>
									</div>
								);
						})}
						{currentPage < maxPages - 1 && maxPages > 3 && (
							<p className="text-purple">...</p>
						)}
						<div
							className={
								"text-[16px] w-[36px] h-[36px] font-mono font-normal cursor-pointer flex justify-center items-center " +
								(maxPages === currentPage
									? "bg-dark-blue rounded-full text-white    transition-all duration-100"
									: "bg-white text-gray-500   transition-all  ")
							}
							key={maxPages - 1}
							onClick={(e) => onSelectionPageClick(e, maxPages)}
						>
							{maxPages}
						</div>
					</div>
				</div>

				<button>
					<MdOutlineNavigateNext
						onClick={(e) => onNextPageClick(e)}
						color="gray"
						size={22}
					/>
				</button>
			</div>
		);
}
