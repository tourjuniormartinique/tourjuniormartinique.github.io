import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h1>Tour cycliste Junior de la Martinique</h1>
            <div className="sct-legal">
                <ul className="sct-jc">
                    <li><i class="fa-regular fa-copyright"></i>La jeunesse cycliste 231</li>
                    <li>Quartier four à chaux, 97231, Le Robert</li>
                    <li>ass.jeunessecycliste231@gmail.com</li>
                    <li>06 96 56 10 80</li>
                    <li>@jeunesse_cycliste</li>
                </ul>
                <ul className="sct-conception">
                    <li>Design : <br /> Laurie-Anne Doré <br/> Kimberly Glany  </li>
                    <li>Conception : <br /> Laurie-Anne Doré.</li>
                </ul>
            </div>
            <div className="section-passion">
                <img src="/images/passion2.png" alt="texte passion" />
            </div>
        </div>
    );
};

export default Footer;