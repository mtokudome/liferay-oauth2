/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */
export async function getAuthToken(props) {
	const request = {
		client_id: props.clientId,
		client_secret: props.clientSecret,
		code: props.code,
		grant_type: props.grantType,
		password: props.userPassword,
		redirect_uri: props.redirectUri,
		username: props.userName,
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
}

export async function getUser(props) {
	return fetch(props.url, {
		headers: {
			'Authorization': 'Bearer ' + props.token,
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
}
