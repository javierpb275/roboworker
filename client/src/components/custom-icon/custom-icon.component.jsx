import React from 'react';

const CustomIcon = ({icon, title}) => (
    <div>
        
        <img alt='icon' src={icon}/>
        <p>{title}</p>
        
    </div>
);

export default CustomIcon;