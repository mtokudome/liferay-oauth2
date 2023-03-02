import React from 'react';

import Token from '../../../components/Token';
import User from '../../../components/User';

function ClientCredentialsFlow() {
	const [token, setToken] = React.useState({});

	return (
		<div>
			<h1>Client Credentials Flow</h1>

			{
				'Scope: read your personal user data (liferay-json-web-services.everything.read.userprofile)'
			}

			<Token handleToken={setToken} grantType={'client_credentials'} />

			<br />

			Authorization token: {token.access_token}

			<User token={token} />
		</div>
	);
}

export default ClientCredentialsFlow;
