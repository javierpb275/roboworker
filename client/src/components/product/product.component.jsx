//This Product component contains the Product icon and all their information (name, price...)


import React from 'react';

//styles

import './product.styles.scss';


const Product = ({id, name, icon, price, coinIcon}) => (
    <div className='products-container' >
        
            <div className='product tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <img style={{paddingTop:'5px'}} alt="product-icon" src={icon}/>
                <h2>{name}</h2>
                <div className='product-price'>
                    <p>
                    <img className='coin-icon' alt="coin-icon" src={coinIcon}/> {price}
                    </p>
                </div>
            </div>
       
    </div>
);


export default Product;