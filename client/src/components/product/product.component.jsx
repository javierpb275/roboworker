//This Product component contains the Product icon and all their information (name, price...)
//React-Tilt makes our product have a cool style when we hover over them

import React from 'react';
import Tilt from 'react-tilt';

const Product = ({id, name, icon, price}) => (
    <div>
        <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 250, width: 250 }}>
            <div className="Tilt-inner pa3">
                <img style={{paddingTop:'5px'}} alt="product-icon" src={icon}/>
                <h6>{name}</h6>
                <p>{price}</p>
            </div>
        </Tilt>
    </div>
);


export default Product;