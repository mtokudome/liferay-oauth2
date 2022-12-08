import React, {useState} from 'react';

function Authorize({handleCode}) {
	const [authUrl, setAuthUrl] = useState('');
	const [clientId, setClientId] = useState('');
	const urlParams = new URLSearchParams(window.location.search);

	function handleAuthorize(event) {
		event.preventDefault();

		try {
			window.location.replace(
				authUrl + '?response_type=code&client_id=' +
					clientId
			);
		}
		catch (e) {
			throw new Error(e);
		}
	}

	const codeParams = urlParams.get('code');

	function getCode() {
		if (codeParams) {
			handleCode(codeParams);
		}
	}

	return (
		<div>
			<h2>Authorize</h2>

			<input
				onChange={client => setAuthUrl(client.target.value)}
				placeholder='Liferay Authorize URL'
				style={{width: "400px"}}
				type='text'
				value={authUrl}
			/><br />
			<input
				onChange={client => setClientId(client.target.value)}
				placeholder='Client ID'
				style={{width: "400px"}}
				type='text'
				value={clientId}
			/><br />

			<form onSubmit={handleAuthorize}>
				<button type='onSubmit'>Authorize</button>
			</form>
			<button onClick={getCode} disabled={!codeParams}>
				Get Authorization Code
			</button>
		</div>
	);
}

export default Authorize;
