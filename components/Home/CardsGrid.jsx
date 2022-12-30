import { images } from "../../pages/data";
import AnnouceCard from "./AnnouceCard";

export default function CardsGrid({ annouces }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-3 relative  z-0">
			{annouces.map((annouce) => (
				<div key={annouce.id} className="flex flex-col items-center">
					<AnnouceCard
						id={annouce.id}
						typeImmoblier={annouce.typeImmoblier}
						typeAnnoce={annouce.typeAnnoce}
						wilaya={annouce.wilaya}
						commune={annouce.commune}
						description={annouce.description}
						prix={annouce.prix}
						typePayment={annouce.typePayment}
						images={images}
					/>
				</div>
			))}
		</div>
	);
}
