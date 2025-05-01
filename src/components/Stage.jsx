import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import etapesData from "../data/stages.json";
import StageCard from "./StageCard";
import {
    MapContainer,
    TileLayer,
    GeoJSON,
    Marker,
    useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as toGeoJSON from "@tmcw/togeojson";
import L from "leaflet";
import "../styles/EtapesAnimation.css";

// Icônes personnalisées pour le départ et l'arrivée
export const startIcon = new L.Icon({
    iconUrl: "/images/start-icon.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});
export const endIcon = new L.Icon({
    iconUrl: "/images/end-icon.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

/**
 * Chargement du GPX → conversion en GeoJSON → affichage de la trace + 2 markers
 */
const GpxGeoJSON = ({ gpxUrl }) => {
    const map = useMap();
    const [geojson, setGeojson] = useState(null);
    const [markers, setMarkers] = useState({ start: null, end: null });

    useEffect(() => {
        let cancelled = false;

        fetch(gpxUrl)
            .then((r) => r.text())
            .then((gpxText) => {
                if (cancelled) return;

                // 1. Parser le XML
                const parser = new DOMParser();
                const xml = parser.parseFromString(gpxText, "application/xml");
                // 2. Convertir en GeoJSON
                const gj = toGeoJSON.gpx(xml);
                // 3. Récupérer la première feature LineString
                const feat = gj.features.find(
                    (f) => f.geometry.type === "LineString"
                );
                if (!feat) return;

                const coords = feat.geometry.coordinates; // [ [lon,lat], ... ]
                // 4. Position des markers (leaflet attend [lat,lon])
                const start = [coords[0][1], coords[0][0]];
                const end = [
                    coords[coords.length - 1][1],
                    coords[coords.length - 1][0],
                ];
                setMarkers({ start, end });

                // 5. Conserver la GeoJSON tel quel (lon,lat)
                setGeojson({
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "LineString",
                                coordinates: coords,
                            },
                        },
                    ],
                });

                // 6. Centrer la carte sur les bounds de la trace
                const layer = L.geoJSON({
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "LineString",
                                coordinates: coords,
                            },
                        },
                    ],
                });
                const bounds = layer.getBounds();
                if (bounds.isValid()) {
                    map.fitBounds(bounds, { padding: [20, 20] });
                }
            })
            .catch(console.error);

        return () => {
            cancelled = true;
        };
    }, [gpxUrl, map]);

    if (!geojson) return null;

    return (
        <>
            <GeoJSON
                data={geojson}
                style={{ color: "blue", weight: 3, opacity: 0.8 }}
            />
            {markers.start && <Marker position={markers.start} icon={startIcon} />}
            {markers.end && <Marker position={markers.end} icon={endIcon} />}
        </>
    );
};

const Stage = () => {
    const cyclistRef = useRef(null);
    const [etapes, setEtapes] = useState([]);
    const [selectedEtape, setSelectedEtape] = useState(null);

    useEffect(() => {
        setEtapes(etapesData);
    }, []);

    useEffect(() => {
        if (cyclistRef.current) {
            gsap.to(cyclistRef.current, {
                x: 1500,
                duration: 15,
                ease: "linear",
                repeat: -1,
            });
        }
    }, []);

    return (
        <section className="etapes-animation-section" id="stages">
            <img
                src="/images/paysage8.png"
                alt="Paysage"
                className="paysage-bg"
            />

            <div className="etapes-cards-wrapper">
                {etapes.map((etape) => (
                    <StageCard
                        key={etape.id}
                        etape={etape}
                        onVoirParcours={() => setSelectedEtape(etape)}
                    />
                ))}
            </div>

            <img
                src="/images/cycliste2.png"
                alt="Cycliste"
                className="cycliste"
                ref={cyclistRef}
            />

            {selectedEtape && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedEtape(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedEtape(null)}
                        >
                            ✖
                        </button>

                        <h2>
                            Étape {selectedEtape.id} – {selectedEtape.start} →{" "}
                            {selectedEtape.end}
                        </h2>
                        <p>
                            <strong>Date :</strong> {selectedEtape.date}
                        </p>
                        <p>
                            <strong>Départ :</strong> {selectedEtape.departureTime}
                        </p>
                        <p>
                            <strong>Distance :</strong> {selectedEtape.distance}
                        </p>
                        {selectedEtape.lieux?.length > 0 && (
                            <>
                                <p>
                                    <strong>Lieux :</strong>
                                </p>
                                <ul>
                                    {selectedEtape.lieux.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <p>
                            <strong>Parcours sur la carte :</strong>
                        </p>
                        <div className="carte-container">
                            <MapContainer
                                center={[14.6, -60.9]}
                                zoom={12}
                                scrollWheelZoom={false}
                                style={{
                                    height: "250px",
                                    width: "100%",
                                    borderRadius: "12px",
                                }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; OpenStreetMap"
                                />
                                <GpxGeoJSON
                                    gpxUrl={`/gpx/etape${selectedEtape.id}.gpx`}
                                />
                            </MapContainer>
                            {/* ← NOUVEAU BOUTON DE TÉLÉCHARGEMENT */}
                            <p style={{ marginTop: 12, textAlign: 'center' }}>
                                <a
                                    href={`/gpx/etape${selectedEtape.id}.gpx`}
                                    download={`etape-${selectedEtape.id}.gpx`}
                                    className="download-gpx"
                                >
                                    📥 Télécharger le GPX
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Stage;










