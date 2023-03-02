import React from 'react';

import Token from '../../../components/Token';
import User from '../../../components/User';

function ResourceOwnerPasswordCredentialsFlow() {
	const [token, setToken] = React.useState({});

	return (
		<div>
			<h1>Resource Owner Password Credentials Flow</h1>

			{
				'Scope: read your personal user data (liferay-json-web-services.everything.read.userprofile)'
			}

			<Token handleToken={setToken} grantType={'password'} />

			<br />

			Authorization token: {token.access_token}

			<User token={token} />
		</div>
	);
}

export default ResourceOwnerPasswordCredentialsFlow;
