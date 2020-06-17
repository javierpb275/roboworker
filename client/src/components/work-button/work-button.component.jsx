//This WorkButton component is a button that when the user clicks on it, they earn coins

import React from 'react';

const WorkButton = ({earnCoins}) => (
    <div>
        <button onClick={() => earnCoins()}>WORK</button>
    </div>
);

export default WorkButton;