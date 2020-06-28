//This is a reusable button component that we can customize and pass a different function and we can use it in multiple places.

import React from 'react';

const WorkButton = ({handleClick, icon, title}) => (
    <div>
        <button onClick={() => handleClick()}>
            <img src={icon}/>
            <p>{title}</p>
        </button>
    </div>
);

export default WorkButton;