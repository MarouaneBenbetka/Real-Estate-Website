import { Table } from "@mantine/core";
import Image from "next/image";

export default function UsersTable({ users }) {
	return (
		<div className="max-w-[100vw] overflow-scroll">
			<Table verticalSpacing="xs" fontSize="md" striped>
				<thead>
					<tr>
						<th className="text-dark-blue"></th>
						<th>Nom</th>
						<th>Email</th>
						<th>Telephone</th>
						<th>Adresse</th>
						<th>Annonces</th>
					</tr>
				</thead>
				<tbody className=" text-dark-blue text-[28px]">
					{users.map((user) => (
						<tr key={user.id}>
							<td>
								<div className="w-[50px] h-[50px] relative rounded-full overflow-hidden">
									<Image
										src={user.photo}
										alt="user"
										fill
										style={{
											objectFit: "cover",
											objectPosition: "center",
										}}
									/>
								</div>
							</td>
							<td>{user.name}</td>
							<td>{user.mail}</td>
							<td>{user.phone}</td>
							<td>
								<p className="max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
									{user.adress}
								</p>
							</td>
							<td width={30}>
								<p className="text-center">{user.nbAnnonces}</p>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}
