import React from "react";
import "../styles/EtapesAnimation.css";

const StageCard = ({ etape, index, onVoirParcours }) => {
    return (
        <div className="stage-card" style={{ left: `${index * 220}px` }}>
            <div className="stage-date">{etape.date}</div>
            <div className="stage-info">
                <p>{etape.start}</p> → <p>{etape.end}</p>
            </div>
            <div className="stage-detail">
                <p>⏱{etape.departureTime}</p>
                <p>📏{etape.distance}</p>
            </div>
            <button className="voir-parcours-btn" onClick={() => onVoirParcours(etape)}>
                voir le parcours
            </button>
        </div>
    );
};

export default StageCard;




