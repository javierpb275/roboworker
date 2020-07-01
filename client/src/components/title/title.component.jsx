//This is a reusable title that we can use for different pages

import React from 'react';

import './title.styles.css';

const Title = ({ title }) => (
    <div style={ {textAlign: "center", fontSize:"500%", fontWeight:"bold"}}>
        <div className='title'>{title}</div>
    </div>
);

export default Title;

