// This is the navigation bar where you can select different options to navigate through our website
// We use the onRouteChange() function to navigate through our website
// isSignedIn checks if the user is signed in and depending on that we display different options on our Navigation bar.

import React from 'react';

//STYLES
import './navigation.styles.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    
        
    if (isSignedIn) {
        return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='option'>Sign Out</p>
        </nav>
        );
    } else {
        return (  
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='option'>Sign In</p>
            <p onClick={() => onRouteChange('signup')} className='option'>Sign Up</p>
        </nav>
        );
    }
    
    
}

export default Navigation;