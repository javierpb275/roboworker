import React from 'react';
import { Link } from 'react-router-dom';

import storeImg from '../../assets/store-image/store-icon.png';

const Store = () => (
    <div>
        <Link to='/store'>
        <img alt='store-icon' src={storeImg}/>
        </Link>
    </div>
);

export default Store;