import { images } from "../../data/data";
import AnnouceCard from "./AnnouceCard";
import SkeltonCard from "./SkeltonCard";

export default function CardsGrid({ annouces, isLoading }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-3 relative  z-0">
			{annouces.map((annouce) => (
				<div key={annouce.id} className="flex flex-col items-center">
					{isLoading ? (
						<SkeltonCard />
					) : (
						<AnnouceCard
							id={annouce.id}
							typeImmoblier={annouce.typeImmoblier}
							typeAnnoce={annouce.typeAnnonce}
							wilaya={annouce.wilaya}
							commune={annouce.commune}
							description={annouce.description}
							prix={annouce.prix}
							typePayment={annouce.typePayment}
							images={annouce.images}
						/>
					)}
				</div>
			))}
		</div>
	);
}
