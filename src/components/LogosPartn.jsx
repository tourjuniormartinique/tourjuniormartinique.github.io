import React, { useEffect, useState } from "react";
import "../styles/LogosPartn.css";

// Import dynamique avec Webpack
const importAll = (r) => r.keys().map(r);
const logos = importAll(
    require.context("../assets/logos-partenaires", false, /\.(png|jpe?g|svg|webp)$/)
);

const LogosPartn = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [groupSize, setGroupSize] = useState(
        window.innerWidth <= 768 ? 3 : 6
    );

    // Met à jour groupSize quand on redimensionne
    useEffect(() => {
        const onResize = () => {
            setGroupSize(window.innerWidth <= 768 ? 3 : 6);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Change de groupe toutes les 3 s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = prev + groupSize;
                return next >= logos.length ? 0 : next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [groupSize]);

    // Slice en fonction de currentIndex et groupSize
    const visibleLogos = [
        ...logos,
        ...logos // on duplique pour gérer le wrap-around
    ].slice(currentIndex, currentIndex + groupSize);

    return (
        <section className="logos-partn-section">
            <div className="logos-group">
                {visibleLogos.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Partenaire ${i + 1}`}
                        className="logo-item"
                    />
                ))}
            </div>
        </section>
    );
};

export default LogosPartn;




