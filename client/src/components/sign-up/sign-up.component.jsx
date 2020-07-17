// This SignUp component displays a SignUp form where we register our user
// We use the onRouteChange() function to navigate through our website

import React from 'react';

import Title from '../title/title.component';

import './sign-up.styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
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
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input 
            onClick={() => onRouteChange('home')}
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