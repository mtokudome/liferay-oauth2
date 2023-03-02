import {useState} from 'react';

import Authorize from './Authorize';
import Token from './Token';
import User from './User';

function ResourceOwnerPasswordCredentialsFlow() {
	const [token, setToken] = useState({});

	const urlParams = new URLSearchParams(window.location.search);

	function handleToken(token) {
		setToken(token);
	}

	return (
		<div>
			<h1>Authorization Code Flow</h1>
			Callback URI: http://localhost:3000/authorization-code-flow (or wherever the React app is
			running)
			<br />
			Scope: read your personal user data
			(liferay-json-web-services.everything.read.userprofile)
			<Authorize />
			<Token
				handleToken={handleToken}
				requestCode={urlParams.get('code')}
				requestGrantType='authorization_code'
				requestRedirectUriPath='/authorization-code-flow'
			/>
			<br />
			Authorization token: {token.access_token}
			<User token={token} />
		</div>
	);
}

export default ResourceOwnerPasswordCredentialsFlow;
