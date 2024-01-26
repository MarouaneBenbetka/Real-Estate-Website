import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapWrapper({ lat, lng }) {
	return (
		<MapContainer
			center={[lat, lng]}
			zoom={10}
			scrollWheelZoom={false}
			className="h-screen w-full focus:outline-none relative z-0"
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker
				position={[lat, lng]}
				icon={L.icon({
					iconUrl: "/.svg",
					iconSize: [42, 42],
					iconAnchor: [12, 41],
				})}
			>
				<Popup>Voici la position de l'evenment</Popup>
			</Marker>
		</MapContainer>
	);
}
