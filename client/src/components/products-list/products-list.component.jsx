import React from 'react';
import Product from '../product/product.component';

const ProductsList = ({products}) => {
    return(
    <div>
        {
            products.map((product, i) => {
                return(
                    <Product 
                    key={i}
                    id={products[i].id}
                    name={products[i].name}
                    icon={products[i].icon}
                    price={products[i].price}
                    />
                );
            })
        }
    </div>
    );
}

export default ProductsList;