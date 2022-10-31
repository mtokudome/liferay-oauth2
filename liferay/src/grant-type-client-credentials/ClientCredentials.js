import React from 'react';
import {useState} from 'react';

import Token from './components/Token';
import Users from './components/Users';

function ClientCredentials() {
	const [token, setToken] = useState({});

	function handleToken(token) {
		setToken(token)
		console.log(token.access_token)
	}

	return (
		<div>
			<h1>Client Credentials Code Flow</h1>

			<Token handleToken={handleToken} />

			<Users token={token} />
		</div>
	);
}

export default ClientCredentials;
