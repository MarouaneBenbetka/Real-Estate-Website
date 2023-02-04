import {
	TileLayer,
	Marker,
	MapContainer,
	useMapEvents,
	useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef, useState } from "react";

function LocationMarker({ position, onChangePosition }) {
	const [fly, setFly] = useState(true);
	const map = useMapEvents({
		click(e) {
			console.log(e.latlng);
			onChangePosition(e.latlng);
			setFly(false);
		},
	});
	const map1 = useMap();
	map1.flyTo(position, 13);

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

export default function LocationPicker({ position, onChangedPosition }) {
	return (
		<div className="border-2 border-purple w-full flex justify-center rounded-xl overflow-hidden  mx-auto">
			<MapContainer
				center={position}
				zoom={15}
				scrollWheelZoom={true}
				className="h-[230px] w-full focus:outline-none "
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				<LocationMarker
					position={position}
					onChangePosition={onChangedPosition}
				/>
			</MapContainer>
		</div>
	);
}
