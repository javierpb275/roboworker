// This SignUp component displays a SignUp form where we register our user
// We use the onRouteChange() function to navigate through our website

import React from 'react';

import Title from '../title/title.component';

import './sign-up.styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      name: ''
    }
  }

  // This function takes care of grabbing what the user types inside the email input and change the state of email
  onEmailChange = (event) => {

    this.setState({email: event.target.value})

  }

  // This function takes care of grabbing what the user types inside the password input and change the state of password
 onPasswordChange = (event) => {

    this.setState({password: event.target.value})
    
  }

  // This function takes care of grabbing what the user types inside the name input and change the state of name
 onNameChange = (event) => {

  this.setState({name: event.target.value})
  
}

  // This function fetch the /register path from the server with a post method and stringify the state of email, password and name that we pass
  // to the email, password and name properties in the database and then we check if the info is correct and create a new user and run 
  // onRouteChange so that it loads the homepage with the user info
  onSubmitSignUp = () => {

    fetch('http://localhost:3001/register', { 
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })

    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
    
  }




    render() {
      const { onRouteChange } = this.props;
      return (
        <div className="signup">
        <main className="pa4 black-80" style={{textAlign:'center' }}>
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <Title title='Sign Up'/>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input 
              onChange={this.onNameChange}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
              onChange={this.onEmailChange}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
              onChange={this.onPasswordChange}
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input 
            onClick={this.onSubmitSignUp}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign up"/>
          </div>
          <div className="lh-copy mt3">
            <a onClick={() => onRouteChange('signin')} href="#0" className="f6 link dim black db pointer">Sign in</a>
          </div>
        </div>
      </main>
      </div>
      );
    }
}


export default SignUp;