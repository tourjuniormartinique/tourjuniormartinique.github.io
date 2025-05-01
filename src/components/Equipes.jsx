import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import equipesData from "../data/equipes.json";
import "../styles/Equipes.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Association région → image
const regionImages = {
    "France (Hexagone)": "/images/france.png",
    "Guadeloupe": "/images/guadeloupe.png",
    "Martinique": "/images/martinique.png",
    "Guyane": "/images/guyane.png",
    "Sainte-Lucie": "/images/saintelucie.png"
};

const Equipes = () => {
    const [equipes, setEquipes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        setEquipes(equipesData);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const openModal = (team, region) => {
        const image = regionImages[region];
        setSelectedTeam({ ...team, image });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTeam(null);
    };

    return (
        <div className="equipes-carousel-container" id="team">
            <h2 className="title team-title">Les Équipes</h2>
            <div className="team-settings">
                <Slider {...settings}>
                    {equipes.map((regionData, index) => {
                        const regionImage = regionImages[regionData.region]; // récupération de l'image de la région

                        return (
                            <div key={index} className="team-slide">
                                <div className="team-card">
                                    {/* 📷 Image de la région dans la carte */}
                                    {regionImage && (
                                        <img src={regionImage} alt={`Illustration ${regionData.region}`} className="card-region-image" />
                                    )}

                                    <h3 className="region-title">
                                        {regionData.flag} {regionData.region}
                                    </h3>

                                    <ul className="team-list">
                                        {regionData.teams.map((team, idx) => (
                                            <li
                                                key={idx}
                                                className="team-name"
                                                onClick={() => openModal(team, regionData.region)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {team.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>


            {modalOpen && selectedTeam && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>✖</button>
                        <h3>{selectedTeam.name}</h3>
                        <div className="region-and-list">
                            {selectedTeam.image && (
                                <img
                                    src={selectedTeam.image}
                                    alt=""
                                    className="region-image"
                                />
                            )}

                            <ul className="participant-list">
                                {selectedTeam.participants?.map((participant, idx) => (
                                    <li key={idx}>{participant}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Equipes;
