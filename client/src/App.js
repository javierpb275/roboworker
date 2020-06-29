import React from 'react';
import { Route, Switch } from 'react-router-dom';

//PAGES
import StorePage from './pages/store-page/store-page.component';//This is the store where we can buy any Product from the ProductList (It's the parent of ProductList)
import Homepage from './pages/homepage/homepage.component';// This is the Homepage where you find the user info and their actions like work or open their backpack


//STYLES
import './App.css';



  const App = () => (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <Homepage/>} />
        <Route exact path="/store" component={() => <StorePage/>} />
      </Switch>
    </div>
  );


export default App;
