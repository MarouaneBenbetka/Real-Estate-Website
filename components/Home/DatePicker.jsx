const DatePicker = ({ onChangeDateDebut, onChangeDateFin }) => {
	return (
		<div className="ml-2">
			<h2 className="mb-1 pl-2 text-[14px] font-normal text-purple">
				Periode de publication :
			</h2>
			<div className="flex gap-2 items-center">
				<input
					type="date"
					className="focus:outline-none p-2 ring-1 ring-gray-300 text-dark-blue rounded-md"
					onChange={(e) => onChangeDateDebut(e.target.value)}
				/>
				<span className="text-purple font-bold">à</span>
				<input
					type="date"
					className="focus:outline-none p-2 ring-1 ring-gray-300 text-dark-blue rounded-md"
					onChange={(e) => onChangeDateFin(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default DatePicker;
