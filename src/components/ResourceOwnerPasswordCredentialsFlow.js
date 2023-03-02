import {useState} from 'react';

import Token from './Token';
import User from './User';

function ResourceOwnerPasswordCredentialsFlow() {
	const [token, setToken] = useState({});

	function handleToken(token) {
		setToken(token);
	}

	return (
		<div>
			<h1>Resource Owner Password Credentials Flow</h1>
			Scope: read your personal user data
			(liferay-json-web-services.everything.read.userprofile)
			<Token
				handleToken={handleToken}
				requestGrantType='password'
				requestRedirectUriPath='/resource-owner-password-credentials-flow'
			/>
			<br />
			Authorization token: {token.access_token}
			<User token={token} />
		</div>
	);
}

export default ResourceOwnerPasswordCredentialsFlow;
