import React from 'react';

//styles
import './custom-icon.styles.scss';

const CustomIcon = ({icon, title}) => (
    <div className='custom-icon'>
        
        <img className='icon 'alt='icon' src={icon}/>
        <span className='title-icon'>
        {title}
        </span>
    </div>
);

export default CustomIcon;