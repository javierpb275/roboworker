//This Card component contains the user image and all their information (name, email, coins...)


import React from 'react';

const Card = ({id, username, email, coins}) => (
    <div>
        <img alt='user-img' src={`https://robohash.org/${id}`}/>
        <div>
            <h2>{username}</h2>
            <p>{email}</p>
            <p>Coins: {coins}</p>
        </div>
    </div>
);

export default Card;