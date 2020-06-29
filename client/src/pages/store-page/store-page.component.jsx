import React, {Component} from 'react';
import ProductsList from '../../components/products-list/products-list.component';//This component displays a list of the products available with their icon, name and price. It's a parent of Product
import SearchBox from '../../components/search-box/search-box.component';//This is a reusable input component that we can customize  and pass a different function or placeholder and we can use it in multiple places.
import {products} from '../../products';//This is an array of the products available




class StorePage extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            searchField: ''//This searchField is used for the SearchBox component to search
        }
    }


    //This gets mounted everytime we run the page and it updates the state
    componentDidMount() {
    this.setState({ 
      products: products
     });
  }

  //This function takes care of getting what the user types in the SearchBox and change the state of searchField
  handleChange = (e) => {
    this.setState({searchField: e.target.value })
  }



    render() {
    const { products, searchField } = this.state;
    //We filter the products so that we can use our SearchBox component to search for different products
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchField.toLowerCase()));

    return (

        <div>
            <nav>
            <p> EXIT</p>
            </nav>
            <h1>STORE</h1>
            <div>
                <SearchBox placeholder='Search Product' handleChange={this.handleChange}/>
            </div>
            <div>
                <ProductsList products={filteredProducts}/>
            </div>
        </div>

        );
    }
}

export default StorePage;