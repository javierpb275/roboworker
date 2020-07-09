//This is a reusable button component that we can customize and pass a different function and we can use it in multiple places.

import React from 'react';

//styles
import './custom-button.styles.scss';

const WorkButton = ({handleClick, icon, title}) => (
   <div className="custom-button">
        <button onClick={() => handleClick()}>
            <img  className='button-icon' alt='icon' src={icon}/>
            <p className="button-title">{title}</p>
        </button>
    </div>
);

export default WorkButton;