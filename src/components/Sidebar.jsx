import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="https://www.facebook.com/caraibesport/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                <img src="/imgliens/live.png" alt="Lien 1" className="sidebar-image" />
            </a>
            <a href="https://lien2.com" target="_blank" rel="noopener noreferrer">
                <img src="/imgliens/groupewa.png" alt="Lien 2" className="sidebar-image" />
            </a>
        </div>
    );
};

export default Sidebar;


