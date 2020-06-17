import React, {Component} from 'react';

//COMPONENTS
import UserCard from './components/user-card/user-card.component';//This component displays the user image and user information
import WorkButton from './components/work-button/work-button.component';//This component makes the user earn coins

//ARRAY OF USERS
import {users} from './users';

//STYLES
import './App.css';




class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }


  //This gets mounted everytime we run the page and it updates the state
  componentDidMount() {
    this.setState({ users: users});
  }

  //This function makes the user coins amount increase. It is made for the WorkButton Component
  onClickEarnCoins = (event) => {
    //const {coins} = this.state.users.coins;
    //this.setState({coins: coins + 1});
   console.log("click")

  };


  render() {
    const {users} = this.state;
  return (
    <div className="App">
      <h1>ROBOWORKER</h1>
      <UserCard users={users}/>
      <WorkButton earnCoins={this.onClickEarnCoins}/>
    </div>
    );
  }

}

export default App;
