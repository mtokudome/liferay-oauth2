import React from 'react';

import Authorize from '../../../components/Authorize';
import Token from '../../../components/Token';
import User from '../../../components/User';

function AuthorizationCodeFlow() {
	const [code, setCode] = React.useState('');
	const [token, setToken] = React.useState({});

	var redirectUri = window.location.href;

	if (redirectUri.lastIndexOf("?") > 0) {
		redirectUri = redirectUri.slice(0, redirectUri.lastIndexOf("?"));
	}

	return (
		<div>
			<h1>Authorization Code Flow</h1>

			{
				'Callback URI: http://localhost:3000/authorization-code-flow (or wherever the React app is running)'
			}

			<br />

			{
				'Scope: read your personal user data (liferay-json-web-services.everything.read.userprofile)'
			}

			<Authorize handleCode={setCode} />

			<Token handleToken={setToken} grantType={'authorization_code'} redirectUri={redirectUri} />

			<br />

			Authorization token: {token.access_token}

			<User token={token} />
		</div>
	);
}

export default AuthorizationCodeFlow;
