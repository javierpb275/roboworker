import React, {Component} from 'react';

//COMPONENTS
import Navigation from './components/navigation/navigation.component';
import Card from './components/card/card.component';
//import UserCard from './components/user-card/user-card.component';//This component displays the user image and user information. It's a parent of Card
import WorkButton from './components/work-button/work-button.component';//This component makes the user earn coins
import ProductsList from './components/products-list/products-list.component';

//ARRAYS
import {users} from './users';
import {products} from './products';

//STYLES
import './App.css';




class App extends Component {
  constructor() {
    super()
    this.state = {
      id: users[0].id,
      username: users[0].username, 
      email: users[0].email,
      coins: users[0].coins
    }
  }


  //This gets mounted everytime we run the page and it updates the state
  componentDidMount() {
    this.setState({ 
      id: this.state.id,
      username: this.state.username, 
      email: this.state.email,
      coins: this.state.coins
     });
  }

  //This function makes the user coins amount increase. It is made for the WorkButton Component
  onClickEarnCoins = () => {
    this.setState({ coins: this.state.coins + 1 });
  };


  render() {
    const {id, username, email, coins} = this.state;
  return (
    <div className="App">
      <Navigation/>
      <h1>ROBOWORKER</h1>
      <Card id={id} username={username} email={email} coins={coins}/>
      <WorkButton earnCoins={this.onClickEarnCoins}/>
      <ProductsList products={products}/>
    </div>
    );
  }

}

export default App;
