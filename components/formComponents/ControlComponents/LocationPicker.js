import { TileLayer, Marker, MapContainer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

const center = {
	lat: 51.505,
	lng: -0.09,
};

function LocationMarker({ position, onChangePosition }) {
	const map = useMapEvents({
		click(e) {
			console.log(e.latlng);
			onChangePosition(e.latlng);
		},
	});

	return position === null ? null : (
		<Marker
			draggable={true}
			position={position}
			icon={L.icon({
				iconUrl: "/map_marker.svg",
				iconSize: [42, 42],
				iconAnchor: [12, 41],
			})}
		></Marker>
	);
}

export default function LocationPicker() {
	const [position, setPosition] = useState(null);

	return (
		<div className="border-2 border-purple flex justify-center rounded-xl overflow-hidden  mx-auto">
			<MapContainer
				center={center}
				zoom={15}
				scrollWheelZoom={true}
				className="h-[400px] w-full focus:outline-none "
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<LocationMarker
					position={position}
					onChangePosition={setPosition}
				/>
			</MapContainer>
		</div>
	);
}
