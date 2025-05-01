import React from "react";
import "../styles/MerciMarquee.css";

const MerciMarquee = () => {
    return (
        <div className="merci-marquee-wrapper">
            <div className="merci-marquee">
                {/* Répète "Merci" plusieurs fois pour un effet continu */}
                {Array.from({ length: 20 }).map((_, index) => (
                    <span key={index} className="merci-item">
                        MERCI
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MerciMarquee;
