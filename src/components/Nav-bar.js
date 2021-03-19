import React from "react";
import "./Nav-bar.css"

function NavBar() {
    return (
    <div className="nav">
        <nav>
            <ul className="nav-bar">
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Services</a></li>
                <li><a href="/#">Testimonials</a></li>
                <li><a href="/#">About Us</a></li>
            </ul>
        </nav>
        <a className="button" href="/#"><button>Contact Us</button></a>
    </div>
    )
}

export default NavBar;