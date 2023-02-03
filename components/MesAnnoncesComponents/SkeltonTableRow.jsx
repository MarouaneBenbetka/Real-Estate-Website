import ContentLoader from "react-content-loader";

const y_offset = 6;

export default function SkeltonTableRow() {
	return (
		<tr className="w-[1200px]  shadow-md  rounded-md overflow-hidden">
			{" "}
			<td colSpan={6}>
				<ContentLoader
					speed={2}
					width={1100}
					height={60}
					viewBox="0 0 1100 60"
					backgroundColor="#eae6e3"
					foregroundColor="#dcdada"
				>
					<circle cx="24" cy="34" r="22" />
					<rect x="54" y="25" rx="3" ry="3" width="160" height="17" />
					<rect x="254" y="25" rx="3" ry="3" width="83" height="17" />
					<rect
						x="420"
						y="25"
						rx="3"
						ry="3"
						width="100"
						height="17"
					/>
					<rect
						x="650"
						y="25"
						rx="3"
						ry="3"
						width="150"
						height="17"
					/>
					<rect
						x="1000"
						y="25"
						rx="3"
						ry="3"
						width="100"
						height="17"
					/>
				</ContentLoader>
			</td>
		</tr>
	);
}
