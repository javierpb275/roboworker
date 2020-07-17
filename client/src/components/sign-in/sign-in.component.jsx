// This SignIn component displays a SignIn form where we sign in with our user
// We use the onRouteChange() function to navigate through our website


import React from 'react';

import Title from '../title/title.component';

import './sign-in.styles.css';



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }

  // This function takes care of grabbing what the user types inside the email input and change the state of signInEmail
  onEmailChange = (event) => {

    this.setState({signInEmail: event.target.value})

  }

  // This function takes care of grabbing what the user types inside the password input and change the state of signInPassword
 onPasswordChange = (event) => {

    this.setState({signInPassword: event.target.value})
    
  }


  // This function fetch the /signin path from the server with a post method and stringify the state of sinInEmail and signInPassword that we pass
  // to the email and password properties in the database and then we check if the info is correct and run onRouteChange so that it loads the 
  // homepage with the user info
  onSubmitSignIn = () => {

    fetch('http://localhost:3001/signin', { 
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
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
      <div className="signin">
        <main className="pa4 black-80" style={{textAlign:'center' }}>
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <Title title='Sign In'/>
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
            onClick={this.onSubmitSignIn}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <p  onClick={() => onRouteChange('signup')} href="#0" className="f6 link dim black db pointer">Sign up</p>
          </div>
        </div>
      </main>
      </div>
      
    );
  }
}

export default SignIn;