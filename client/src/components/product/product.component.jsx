//This Product component contains the Product icon and all their information (name, price...)
//React-Tilt makes our product have a cool style when we hover over them

import React from 'react';


const Product = ({id, name, icon, price, coinIcon}) => (
    <div>
        
            <div className="Tilt-inner pa3">
                <img style={{paddingTop:'5px'}} alt="product-icon" src={icon}/>
                <h6>{name}</h6>
                <div>
                <img alt="coin-icon" src={coinIcon}/>
                    <p>
                    {price}
                    </p>
                </div>
            </div>
       
    </div>
);


export default Product;