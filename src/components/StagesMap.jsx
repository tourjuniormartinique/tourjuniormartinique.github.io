import React from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icônes pour les marqueurs
const startIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

const endIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

const pointIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25]
});

const StagesMap = ({ selectedStage }) => {
    if (!selectedStage) return null;

    const path = selectedStage.route.map(point => [point[0], point[1]]);
    const center = path[Math.floor(path.length / 2)];

    return (
        <MapContainer center={center} zoom={12} style={{ height: "400px", width: "100%", borderRadius: "10px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Polyline positions={path} color="blue" weight={5} />

            <Marker position={path[0]} icon={startIcon}>
                <Popup>Départ : {selectedStage.start}</Popup>
            </Marker>

            <Marker position={path[path.length - 1]} icon={endIcon}>
                <Popup>Arrivée : {selectedStage.end}</Popup>
            </Marker>

            {path.slice(1, -1).map((position, index) => (
                <Marker key={index} position={position} icon={pointIcon}>
                    <Popup>Point {index + 1}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default StagesMap;





