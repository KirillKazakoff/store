import { nanoid } from 'nanoid';
import React from 'react';
import ShopCard from './ShopCard/ShopCard';
import './CardsView.css';

export default function CardsView({ cards, activeView }) {
    const cardList = cards.map((card) => {
        return <ShopCard card={card} key={nanoid(4)} />;
    });

    return <ul className={`CardsView ${activeView}`}>{cardList}</ul>;
}
