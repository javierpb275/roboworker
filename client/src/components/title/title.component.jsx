//This is a reusable title that we can use for different pages

import React from 'react';

import './title.styles.css';

const Title = ({ title }) => (
    <div>
        <h1 className='title'>{title}</h1>
    </div>
);

export default Title;

