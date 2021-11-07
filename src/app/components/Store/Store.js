import React, { useState } from 'react';
import cards from './cards';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';

export default function Store() {
    const [activeView, setView] = useState('view_list');

    const onSwitch = () => {
        console.log(activeView);
        const newView = activeView === 'view_list'
            ? 'view_module'
            : 'view_list';

        setView(newView);
    };

    return (
        <div className='Store'>
            <IconSwitch
                activeView={activeView}
                onSwitch={onSwitch}
            />
            <CardsView
                cards={cards}
                activeView={`cards-${activeView}`}
            />
        </div>
    );
}
