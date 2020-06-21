// This is the navigation bar where you can select different options to navigate through our website
// We use the onRouteChange() function to navigate through our website
// isSignedIn checks if the user is signed in and depending on that we display different options on our Navigation bar.

import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    
        
    if (isSignedIn) {
        return (
        <nav>
            <p onClick={() => onRouteChange('signout')}>Sign Out</p>
        </nav>
        );
    } else {
        return (  
        <nav>
            <p onClick={() => onRouteChange('signin')}>Sign In</p>
            <p onClick={() => onRouteChange('signup')}>Sign Up</p>
        </nav>
        );
    }
    
    
}

export default Navigation;