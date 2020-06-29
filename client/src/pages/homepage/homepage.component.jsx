import React, {Component} from 'react';


//COMPONENTS
import Navigation from '../../components/navigation/navigation.component';// This is the navigation bar where you can select to sign in, sign out and register.
import SignIn from '../../components/sign-in/sign-in.component';//This is the SignIn component form.
import SignUp from '../../components/sign-up/sign-up.component';//This is the SignUp component form.
import Card from '../../components/card/card.component';//This component displays the user image and user information.
import CustomButton from '../../components/custom-button/custom-button.component';//This is a reusable button component that we can customize and pass a different function and we can use it in multiple places.
import Store from '../../components/store/store.component';//This component is an image of a store that when we click on it, it takes us to the StorePage
import Title from '../../components/title/title.component'; // This component is a reusable title for the page

//Lists
import {users} from './users';//This is a fake database of the users


//Assets
import nailerImg from '../../assets/nailer-image/nailer.png';
import backpackImg from '../../assets/backpack-image/backpack.png';




class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      route: 'signin',//This route state takes care of changing from one page to another. The default page will be the SignIn component.
      isSignedIn: false,// isSignedIn checks if the user is signed in 
      user: {
        id: '',
        username: '',
        email: '',
        coins: 0
      },
      
    }
  }


  //This gets mounted everytime we run the page and it updates the state
  componentDidMount() {
    this.setState({ 
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

  //This function does nothing
  nothing = () => {}


  render() {
    const {user, isSignedIn} = this.state;
  return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route === 'home' 
      ? <div>
      <Title title={'ROBOWORKER'}/>
      <Store/>
      <Card id={user.id} username={user.username} email={user.email} coins={user.coins}/>
      <CustomButton handleClick={this.onClickEarnCoins} icon={nailerImg} title='Work'/>
      <CustomButton handleClick={this.nothing} icon={backpackImg} title='Backpack'/>
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

export default Homepage;
