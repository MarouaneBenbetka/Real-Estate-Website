import React from "react";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { BiTrash } from "react-icons/bi";
import Image from "next/image";
import { annouces } from "../../data/data";
import TableRow from "./TableRow";
import Link from "next/link";
import annonceCrud from "../../utils/services/annonce";
import SkeltonTableRow from "./SkeltonTableRow";

const MesAnnoncesList = ({ mesannonces, isLoading }) => {
	const annonces = mesannonces;

	return (
		<div>
			<div className="overflow-x-auto w-full  mt-8 ">
				<table
					className=" table mx-auto  w-full  bg-white "
					style={{
						th: {
							position: "static",
						},
					}}
				>
					<thead className="bg-white  ">
						<tr className=" bg-white">
							<th className="text-[18px] static">Annonce</th>
							<th className="text-[18px]">Type</th>
							<th className="text-[18px]">Nature</th>
							<th className="text-[18px]">Localisation</th>
							<th className="text-[18px]">Payment</th>
						</tr>
					</thead>
					{isLoading ? (
						<tbody>
							{[...Array(6)].map((e, index) => (
								<SkeltonTableRow key={index} />
							))}
						</tbody>
					) : (
						<tbody className="bg-white">
							{annonces?.map((annonce) => (
								<TableRow
									key={annonce.id}
									description={annonce.description}
									typeAnnonce={annonce.typeAnnonce}
									typeImmoblier={annonce.typeImmoblier}
									typePayment={annonce.typePayment}
									prix={annonce.prix}
									wilaya={annonce.wilaya}
									commune={annonce.commune}
									datePublication={annonce.datePublication}
									image={annonce.images[0]}
									id={annonce.id}
									data={annonce.id}
									// onFinishDelete={onFinishDelete}
								/>
							))}
						</tbody>
					)}
				</table>
			</div>
		</div>
	);
};

export default MesAnnoncesList;
