export const getAuthToken = async props => {
	const request = {
		client_id: props.requestClientId,
		client_secret: props.requestClientSecret,
		code: props.requestCode,
		grant_type: props.requestGrantType,
		password: props.requestUserPassword,
		redirect_uri: props.requestRedirectUri,
		username: props.requestUserName
	};

	let formBody = [];
	for (let property in request) {
		var encodedKey = encodeURIComponent(property);
		var encodedValue = encodeURIComponent(request[property]);
		formBody.push(encodedKey + '=' + encodedValue);
	}
	formBody = formBody.join('&');

	const data = await fetch(props.tokenUrl, {
		body: formBody,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	}).then(response => response.json());

	return data;
};

export const getUser = async props => {
	return fetch(props.url, {
		headers: {
			Authorization: 'Bearer ' + props.token,
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};
