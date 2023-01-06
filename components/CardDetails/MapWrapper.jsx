import {
	Map,
	TileLayer,
	useMap,
	Marker,
	Popup,
	MapContainer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapWrapper() {
	return (
		<div className="border-2 border-purple flex max-w-[1000px] justify-center rounded-xl overflow-hidden">
			<MapContainer
				center={[36.769445, 3.058147]}
				zoom={15}
				scrollWheelZoom={true}
				className="h-[400px] w-full focus:outline-none "
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker
					position={[36.769445, 3.058147]}
					icon={L.icon({
						iconUrl: "/marker.png",
						iconSize: [60, 60],
						iconAnchor: [12, 41],
					})}
				>
					<Popup>Voici la position d'immoblier</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
