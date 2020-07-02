//This Product component contains the Product icon and all their information (name, price...)


import React from 'react';

//styles

import './product.styles.scss';


const Product = ({id, name, icon, price, coinIcon, handleClick}) => (
    <div className='products-container' >
            <div onClick={() => handleClick(price)} className='product grow br3 bw2 shadow-5'>
                <img style={{paddingTop:'5px'}} alt="product-icon" src={icon}/>
                <h2>{name}</h2>
                <p><img className='coin-icon' alt="coin-icon" src={coinIcon}/> {price}</p>
            </div>
    </div>
);


export default Product;