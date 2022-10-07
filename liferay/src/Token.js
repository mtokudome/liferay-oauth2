import React, {useState} from 'react';

import {getAuthToken} from './utils/Requests';

function Token() {

  const [code, setCode] = useState('');
  const [token, setToken] = useState('');

  const handleClick = async (event) => {

       getAuthToken();

  }

// authorization code should actually be recieved from Authorize.js and passed here on click

 return (

   <div className='Token'>
     <h2>Get Token</h2>

       <button onClick={() => handleClick()}>Get Token</button>


   </div>

 );
}

export default Token;
