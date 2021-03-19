import React from "react";
import "./Services.css";

function Services(props) {
    return (
    <div className="services-container">
        <div className="services">
            <h3>{props.service}</h3>
            <img scr={props.img} alt="remodel"/>
            <p>{props.description}</p>
        </div>

    </div>
   

    )
}

export default Services;