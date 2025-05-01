import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/CyclistAnimation.css";

const CyclistAnimation = () => {
    const cyclistRef = useRef(null);
    const SPEED = 1000; // pixels par seconde (augmentez pour accélérer)

    useEffect(() => {
        let tween;
        const createTween = () => {
            const distance = window.innerWidth + 100;
            const duration = distance / SPEED;
            console.log(`width=${window.innerWidth}px → duration=${duration.toFixed(2)}s`);
            gsap.set(cyclistRef.current, { x: -100 });
            return gsap.to(cyclistRef.current, {
                x: distance,
                duration,
                ease: "linear",
                repeat: -1,
                repeatDelay: 0,
            });
        };

        tween = createTween();
        const onResize = () => {
            tween.kill();
            tween = createTween();
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            tween.kill();
        };
    }, []);

    return (
        <div className="animation-wrapper">
            <img src="/images/paysage.png" className="background-image" alt="" />
            <img src="/images/cycliste.png" className="cyclist" ref={cyclistRef} alt="" />
        </div>
    );
};

export default CyclistAnimation;

