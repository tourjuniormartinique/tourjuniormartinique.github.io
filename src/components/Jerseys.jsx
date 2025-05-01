import React, { useEffect, useState } from "react";
import jerseysData from "../data/jerseys.json";
import "../styles/Jerseys.css";

const Jerseys = () => {
    const [jerseys, setJerseys] = useState([]);

    useEffect(() => {
        setJerseys(jerseysData);
    }, []);

    return (
        <section className="jerseys-section">
            <div className="jerseys-header">
                <h2>Présentation des Maillots</h2>
            </div>
            <div className="jerseys-grid">
                {jerseys.map((j) => (
                    <div key={j.id} className="jersey-card">
                        <img
                            src={j.img}
                            alt={j.label}
                            className="jersey-image"
                        />
                        <h3 className="jersey-label">{j.label}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Jerseys;
