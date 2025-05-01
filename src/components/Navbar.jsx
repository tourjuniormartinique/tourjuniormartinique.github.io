import React from "react";
import "../styles/Navbar.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home"><i class="fa-solid fa-house"></i></a></li>
                <li><a href="#stages"><i class="fa-solid fa-road"></i></a></li>
                <li><a href="#team"><i class="fa-solid fa-person-biking"></i></a></li>
                <li><a href="#sponsors"><i class="fa-solid fa-handshake"></i></a></li>
                <li><a href="#contact"><i class="fa-solid fa-envelope"></i></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
