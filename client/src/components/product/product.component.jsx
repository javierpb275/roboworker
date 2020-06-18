import React from 'react';

const Product = ({id, name, icon, price}) => (
    <div>
        <div>
            <img alt="product-icon" src={icon}/>
            <div>
                <h6>{name}</h6>
                <p>{price}</p>
            </div>
        </div>
    </div>
);


export default Product;