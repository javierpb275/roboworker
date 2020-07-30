import React, { Component } from 'react';


//COMPONENTS
import Navigation from './components/navigation/navigation.component';// This is the navigation bar where you can select to sign in, sign out and register.
import SignIn from './components/sign-in/sign-in.component';//This is the SignIn component form.
import SignUp from './components/sign-up/sign-up.component';//This is the SignUp component form.
import Card from './components/card/card.component';//This component displays the user image and user information.
import CustomButton from './components/custom-button/custom-button.component';//This is a reusable button component that we can customize and pass a different function and we can use it in multiple places.
import CustomIcon from './components/custom-icon/custom-icon.component';//This component is a reusable icon
import Title from './components/title/title.component'; // This component is a reusable title for the page
import SearchBox from './components/search-box/search-box.component';//This is a reusable input component that we can customize  and pass a different function or placeholder and we can use it in multiple places.
import ProductsList from './components/products-list/products-list.component';//This component displays a list of the products available with their icon, name and price. It's a parent of Product
import Scroll from './components/scroll/scroll.component';//This component allows us to wrap the producList and make it scrollable

//Lists
import { products } from './products';//This is an array of the products available

//Assets
import nailerImg from './assets/nailer-image/nailer.png';
import storeImg from './assets/store-image/store-icon.png';
import coinImg from './assets/coin-image/coin.png';

//style
import './App.css';

const initialState = {
  searchField: '',//This searchField is used for the SearchBox component to search
  route: 'signin',//This route state takes care of changing from one page to another. The default page will be the SignIn component.
  isSignedIn: false,// isSignedIn checks if the user is signed in 
  user: {
    id: '',
    name: '',
    email: '',
    coins: 0,
    joined: ''

  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState 
  }


  //This function takes care of loading the user which is passed down to the SignIn and SignUp components as a prop
  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        coins: user.coins,
        joined: user.joined
      }
    })
  }


  //This gets mounted everytime we run the page and it updates the state
  componentDidMount() {
    this.setState({
      user: this.state.user
    });
  }

  //This function makes the user coins amount increase. It is made for the WorkButton Component
  onClickEarnCoins = () => {
    const { user } = this.state;

    fetch('http://localhost:3001/earncoins', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: user.id
      })
    })

      .then(response => response.json())
      .then(amount => {
        this.setState(Object.assign(user, { coins: amount }));
      })

      .catch(console.log)

  };

  //This function allows the user to spend their coins. It is made for the Product component
  onClickSpendCoins = (price) => {
    const { user } = this.state;


    if (user.coins >= price) {

      fetch('http://localhost:3001/spendcoins', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          price: price
        })
      })

        .then(response => response.json())
        .then(data => {
          if (!isNaN( data )) {
            this.setState(Object.assign(user, { coins: data }));
          }

          else {
            alert(data);
          }

        })

        .catch(responseError => alert(responseError));

    }

    else {
      alert('You can`t afford this product. Keep Working!')
    }

  };

  //This function takes care of getting what the user types in the SearchBox and change the state of searchField
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  //This function is used to change the route
  onRouteChange = (route) => {

    if (route === 'signout') {
      this.setState( initialState );
    }

    else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }

    this.setState({ route: route });

  }


  render() {
    const { user, isSignedIn, searchField } = this.state;
    //We filter the products so that we can use our SearchBox component to search for different products
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App" style={{ padding: '1% 2% 2% 2%' }}>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
          ? <div>
            <Title title={'ROBOWORKER'} />
            <Card id={user.id} name={user.name} email={user.email} coins={user.coins} coinIcon={coinImg} />
            <CustomButton handleClick={this.onClickEarnCoins} icon={nailerImg} title='Work' />
            <CustomIcon icon={storeImg} title='$TORE' />
            <SearchBox placeholder='Search Product' handleChange={this.handleChange} />
            <Scroll>
              <ProductsList coinIcon={coinImg} products={filteredProducts} handleClick={this.onClickSpendCoins} />
            </Scroll>
          </div>
          : (
            this.state.route === 'signin'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }

}

export default App;