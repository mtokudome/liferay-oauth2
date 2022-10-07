export const getAuthCode = object => {
	return fetch(`http://localhost:8080/o/oauth2/authorize?response_type=code&client_id=id-7ab570dc-e36e-9e4e-e5da-b2ab887ec'`);
};

export const getAuthToken = () => {

	var request = {
		'client_id': 'id-865d87c6-481d-6318-39a9-4f22b65822',
		'client_secret': 'secret-6feea6e9-e93b-660b-d41a-6aab59239b',
		'code': '8ac27d8ab2f47e58849d3539f9b3c242f36feeb744ec6124cec33653d9ba320a',
		'grant_type': 'authorization_code',
		'redirect_uri': 'http://localhost:3000?url=http://localhost:8080&client_id=id-865d87c6-481d-6318-39a9-4f22b65822'
	}

	var formBody = [];
	for (var property in request) {
		var encodedKey = encodeURIComponent(property);
		var encodedValue = encodeURIComponent(request[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");

	return fetch(`http://localhost:8080/o/oauth2/token`, {
		body: formBody,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	});

}

export const getUsers = () => {

	return fetch(`http://localhost:8080/o/headless-admin-user/v1.0/user-accounts`, {
		headers: {
			Authorization: 'Basic ' + btoa('test@liferay.com:learn'),
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};
