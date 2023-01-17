export async function getAuthToken(props) {
	const request = {
		client_id: props.clientId,
		client_secret: props.clientSecret,
		code: props.code,
		grant_type: 'authorization_code',
		redirect_uri: 'http://localhost:3000',
	};

	let formBody = [];

	for (const property in request) {
		const encodedKey = encodeURIComponent(property);
		const encodedValue = encodeURIComponent(request[property]);

		formBody.push(encodedKey + '=' + encodedValue);
	}

	formBody = formBody.join('&');

	const data = await fetch(props.tokenUrl, {
		body: formBody,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	}).then((response) => response.json());

	return data;
};

export async function getUser(props) {
	return fetch(props.url, {
		headers: {
			'Authorization': 'Bearer ' + props.token,
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};
