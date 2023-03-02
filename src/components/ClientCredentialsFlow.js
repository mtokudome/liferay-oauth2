import {useState} from 'react';

import Token from './Token';
import User from './User';

function ClientCredentialsFlow() {
	const [token, setToken] = useState({});

	function handleToken(token) {
		setToken(token);
	}

	return (
		<div>
			<h1>Client Credentials Flow</h1>
			Scope: read your personal user data
			(liferay-json-web-services.everything.read.userprofile)
			<Token
				handleToken={handleToken}
				requestGrantType='client_credentials'
				requestRedirectUriPath='/client-credentials-flow'
			/>
			<br />
			Authorization token: {token.access_token}
			<User token={token} />
		</div>
	);
}

export default ClientCredentialsFlow;
