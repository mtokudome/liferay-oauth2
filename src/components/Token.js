import React, {useState} from 'react';
import {getAuthToken} from '../utils/Requests';

export function Token({handleToken, requestGrantType, requestRedirectUriPath}) {
	const [clientId, setClientId] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [tokenUrl, setTokenUrl] = useState('');
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const urlParams = new URLSearchParams(window.location.search);

	async function handleGetToken() {
		const props = {
			requestClientId: clientId,
			requestClientSecret: clientSecret,
			requestCode: urlParams.get('code'),
			requestGrantType: requestGrantType,
			requestRedirectUri: 'http://localhost:3000' + requestRedirectUriPath,
			requestUserName: userName,
			requestUserPassword: userPassword,
			tokenUrl: tokenUrl,
		};
		const token = await getAuthToken(props);
		handleToken(token);
	}

	var userElements = undefined;

	if (requestGrantType != 'password') {
		userElements = <div />;
	}
	else {
		userElements = <div>
			<input
				onChange={client => setUserName(client.target.value)}
				placeholder='User Name'
				style={{width: '500px'}}
				type='text'
				value={userName}
			/>
			<br />
			<input
				onChange={client => setUserPassword(client.target.value)}
				placeholder='User Password'
				style={{width: '500px'}}
				type='text'
				value={userPassword}
			/>
			<br />
		</div>;
	}

	return (
		<div className='Token'>
			<h2>Get Token</h2>
			<input
				onChange={client => setTokenUrl(client.target.value)}
				placeholder='Liferay Token URL'
				style={{width: '500px'}}
				type='text'
				value={tokenUrl}
			/>
			(e.g. http://localhost:8080/o/oauth2/token)
			<br />
			<input
				onChange={client => setClientId(client.target.value)}
				placeholder='Client ID'
				style={{width: '500px'}}
				type='text'
				value={clientId}
			/>
			<br />
			<input
				onChange={client => setClientSecret(client.target.value)}
				placeholder='Client Secret'
				style={{width: '500px'}}
				type='text'
				value={clientSecret}
			/>
			<br />
			{userElements}
			<button onClick={handleGetToken}>Get Token</button>
		</div>
	);
}

export default Token;
