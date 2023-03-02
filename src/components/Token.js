import React from 'react';

import {getAuthToken} from '../utils/Requests';

export function Token({code, handleToken}) {
	const [clientId, setClientId] = React.useState('');
	const [clientSecret, setClientSecret] = React.useState('');
	const [tokenUrl, setTokenUrl] = React.useState('');

	async function handleGetToken() {
		const token = await getAuthToken({
			clientId,
			clientSecret,
			code,
			tokenUrl,
		});

		handleToken(token);
	}

	return (
		<div className="Token">
			<h2>Get Token</h2>

			<input
				onChange={(event) => setClientId(event.target.value)}
				placeholder="Client ID"
				style={{width: 500}}
				type="text"
				value={clientId}
			/>

			<br />

			<input
				onChange={(event) => setClientSecret(event.target.value)}
				placeholder="Client Secret"
				style={{width: 500}}
				type="text"
				value={clientSecret}
			/>

			<br />

			<input
				onChange={(event) => setTokenUrl(event.target.value)}
				placeholder="Liferay Token URL"
				style={{width: 500}}
				type="text"
				value={tokenUrl}
			/>

			{
				'(e.g. http://localhost:8080/o/oauth2/token)'
			}

			<br />

			<button onClick={handleGetToken}>Get Token</button>
		</div>
	);
}

export default Token;
