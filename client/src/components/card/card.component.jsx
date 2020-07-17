//This Card component contains the user image and all their information (name, email, coins...)
//React-Tilt makes our component have a cool style when we hover over them

import React from 'react';
import Tilt from 'react-tilt';

//styles
import './card.styles.css';

const Card = ({id, name, email, coins, coinIcon}) => (
    <div className='card-container'>
    <Tilt className="card" options={{ max : 70 }} >
        <img  className='user-img' alt='user-img' src={`https://robohash.org/${id}`}/>
        <div className='user-info'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>
             Coins: <img  className='coin-icon' alt='coin-icon' src={coinIcon}/> {coins}
            </p>
        </div>
    </Tilt>
    </div>
    
);

export default Card;