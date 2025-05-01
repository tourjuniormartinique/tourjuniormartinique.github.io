import React from "react";
import "../styles/StageBar.css";
import calendarIcon from "../calendar.png";

const stages = [
    { id: 1, day: "01/05", time: "13:00", location: "Robert - Vert Pré" },
    { id: 2, day: "02/05", time: "13:00", location: "Rivière Pilote - Ajoupa Bouillon" },
    { id: 3, day: "03/05", time: "08:00", location: "Marin - Carbet" },
    { id: 4, day: "03/05", time: "15:00", location: "Carbet - Fond Saint Denis (CLM)" },
    { id: 5, day: "04/05", time: "08:00", location: "Robert - Robert" },
];

const StageBar = () => {
    return (
        <div className="stage-bar">
            {/* Icône de calendrier */}
            <div className="calendar">
                <img src={calendarIcon} alt="Calendrier" />
                <p>Événement du 1er au 4 mai 2025</p>
            </div>

            {/* Étapes */}
            <div className="stages">
                {stages.map((stage) => (
                    <div key={stage.id} className="stage">
                        <p className="day">{stage.day}</p>
                        <p className="time">{stage.time}</p>
                        <p className="location">{stage.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StageBar;
