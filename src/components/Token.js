import React, {useState} from 'react';
import {getAuthToken} from '../utils/Requests';

export function Token({handleToken, code}) {
	const [clientId, setClientId] = useState('');
	const [clientSecret, setClientSecret] = useState('');

	async function handleGetToken() {
		const props = {
			clientId: clientId,
			clientSecret: clientSecret,
			code: code,
		}
		const token = await getAuthToken(props);
		handleToken(token);
	}

	return (
		<div className='Token'>
			<h2>Get Token</h2>

			<input
				onChange={client => setClientId(client.target.value)}
				placeholder='Client ID'
				style={{width: "400px"}}
				type='text'
				value={clientId}
			/><br />
			<input
				onChange={client => setClientSecret(client.target.value)}
				placeholder='Client Secret'
				style={{width: "400px"}}
				type='text'
				value={clientSecret}
			/><br />

			<button onClick={handleGetToken}>Get Token</button>
		</div>
	);
}

export default Token;
