import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <li className="card-container">
        <picture>
            <img src={props.commander.img} alt={props.commander.name}/>
        </picture>
        <h2>{ props.commander.name }</h2>
        <p>Power Level: { props.commander.power_level}/10</p>
    </li>
)