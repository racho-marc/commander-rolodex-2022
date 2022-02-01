import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css';

export const CardList = props => (  
    <ul className='card-list'>
    {
        props.commanders.map(commander => (
            <Card key={commander.id} commander={commander}></Card>
            )
        )
    }
    </ul>
);