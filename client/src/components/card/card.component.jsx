//This Card component contains the user image and all their information (name, email, coins...)
//We get all the props from UserCard component, where we pass all the information.

import React from 'react';

const Card = ({id, username, email, coins}) => (
    <div>
        <img alt='user-image' src={`https://robohash.org/${id}`}/>
        <div>
            <h2>{username}</h2>
            <p>{email}</p>
            <p>Coins: {coins}</p>
        </div>
    </div>
);

export default Card;