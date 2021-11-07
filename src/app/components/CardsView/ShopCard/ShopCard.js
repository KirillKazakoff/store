/* eslint-disable object-curly-newline */
import React from 'react';
import './ShopCard.css';

export default function ShopCard({ card }) {
    const { name, price, color, img } = card;

    return (
        <li className='card ShopCard'>
            <header className='card-header'>
                <div className='card-title'>{name}</div>
                <div className='card-color'>{color}</div>
            </header>
            <img
                src={img}
                alt={name}
                className='card-img'
            />
            <footer className='card-footer'>
                <div className='card-price'>{`${price}$`}</div>
                <button
                    className='btn btn-primary card-add-button'
                    type='button'
                >
                    add to cart
                </button>
            </footer>
        </li>
    );
}
