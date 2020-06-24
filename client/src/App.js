import React, {Component} from 'react';

//COMPONENTS
import Navigation from './components/navigation/navigation.component';// This is the navigation bar where you can select to sign in, sign out and register.
import SignIn from './components/sign-in/sign-in.component';//This is the SignIn component form.
import SignUp from './components/sign-up/sign-up.component';//This is the SignUp component form.
import Card from './components/card/card.component';//This component displays the user image and user information.
//import UserCard from './components/user-card/user-card.component';//This component displays the user image and user information. It's a parent of Card
import WorkButton from './components/work-button/work-button.component';//This component makes the user earn coins
import ProductsList from './components/products-list/products-list.component';//This component displays a list of the products available with their icon, name and price. It's a parent of Product

//ARRAYS
import {users} from './users';//This is a fake database of the users
import {products} from './products';//This is an array of the products available

//STYLES
import './App.css';




class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'signin',//This route state takes care of changing from one page to another. The default page will be the SignIn component.
      products: [],
      isSignedIn: false,// isSignedIn checks if the user is signed in 
      user: {
        id: '',
        username: '',
        email: '',
        coins: 0
      }
      
      
    }
  }


  //This gets mounted everytime we run the page and it updates the state
  componentDidMount() {
    this.setState({ 
      products: products,
      user: users[1]
     });
  }

  //This function makes the user coins amount increase. It is made for the WorkButton Component
  onClickEarnCoins = () => {
    this.setState(Object.assign(this.state.user, {coins: this.state.user.coins + 1}));
  };

  //This function is used to change the route
  onRouteChange = (route) => {

    if (route === 'signout') {
      this.setState({isSignedIn: false});
    }

    else if (route === 'home'){
    this.setState({isSignedIn: true});
    }

    this.setState({route: route});

  }


  render() {
    const {user, isSignedIn, products} = this.state;
  return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route === 'home' 
      ? <div>
      <h1 className="title">ROBOWORKER</h1>
      <Card id={user.id} username={user.username} email={user.email} coins={user.coins}/>
      <WorkButton earnCoins={this.onClickEarnCoins}/>
      <ProductsList products={products}/>
      </div>
      : (
        this.state.route === 'signin' 
        ? <SignIn onRouteChange={this.onRouteChange}/>
        : <SignUp onRouteChange={this.onRouteChange}/>
      )
      
    }
    </div>
    );
  }

}

export default App;
