//This is a reusable input component that we can customize  and pass a different function or placeholder and we can use it in multiple places.

import React from 'react';



const SearchBox = ({ placeholder, handleChange }) => (
    <div className='search-box' style={{marginBottom:'2%'}}>
    <input 
      type='search' 
      placeholder={placeholder} 
      onChange={handleChange} 
    />
    </div>
);

export default SearchBox;