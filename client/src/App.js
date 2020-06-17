import React from 'react';

//COMPONENTS
import UserCard from './components/user-card/user-card.component';
import WorkButton from './components/work-button/work-button.component';

//ARRAY OF USERS
import {users} from './users';

//STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <UserCard users={users}/>
      <WorkButton/>
    </div>
  );
}

export default App;
