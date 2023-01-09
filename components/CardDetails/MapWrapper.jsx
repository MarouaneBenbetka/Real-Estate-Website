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

export default function MapWrapper({ lat, lng }) {
	return (
		<div className="border-2 border-purple flex justify-center rounded-xl overflow-hidden  mx-auto">
			<MapContainer
				center={[lat, lng]}
				zoom={15}
				scrollWheelZoom={true}
				className="h-[400px] w-full focus:outline-none "
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker
					position={[lat, lng]}
					icon={L.icon({
						iconUrl: "/map_marker.svg",
						iconSize: [42, 42],
						iconAnchor: [12, 41],
					})}
				>
					<Popup>Voici la position d'immoblier</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
