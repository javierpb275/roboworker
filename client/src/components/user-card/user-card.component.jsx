//This UserCard component receives all the users and here we loop over those users in order to get all their properties and we pass them to the Card component.

import React from 'react';
import Card from '../card/card.component';

const UserCard = ({users}) => {
    return (
    <div>
        {
            users.map((user, i) => {
                return(
                    <Card 
                    key={i}
                    id={users[i].id}
                    username={users[i].username}
                    email={users[i].email}
                    coins={users[i].coins}
                    />
                );
            })
        }
    </div>
    );
}

export default UserCard;