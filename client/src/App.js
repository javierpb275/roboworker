import React from 'react';
import { Route, Switch } from 'react-router-dom';

//PAGES
import Homepage from './pages/homepage/homepage.component';// This is the Homepage where you find the user info and their actions like work or open their backpack


//STYLES
import './App.css';




  const App = () => (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <Homepage/>} />
      </Switch>
    </div>
  );


export default App;
