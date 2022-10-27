export const getAuthCode = object => {
	return fetch(`http://localhost:8080/o/oauth2/authorize?response_type=code&client_id=id-865d87c6-481d-6318-39a9-4f22b65822'`);
};

export const getAuthToken = async (code) => {

	const request = {
		'client_id': 'id-252408fa-51ab-d8b5-0872-a7183222c6',
		'client_secret': 'secret-ede4b124-a0a8-bbd2-ff78-5cdba5a7bbc',
		'code': code,
		'grant_type': 'authorization_code',
		'redirect_uri': 'http://localhost:3000?url=http://localhost:8080&client_id=id-252408fa-51ab-d8b5-0872-a7183222c6'
	}

	let formBody = [];
	for (let property in request) {
		var encodedKey = encodeURIComponent(property);
		var encodedValue = encodeURIComponent(request[property]);
		formBody.push(encodedKey + "=" + encodedValue);
	}
	formBody = formBody.join("&");

	const data = await fetch(`http://localhost:8080/o/oauth2/token`, {
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  })
    .then((response) => response.json())

  return data;

}

export const getUsers = () => {
	var request = 'Bearer 3441f5268541e0faff8c6874954e634a80fdb1e589beccaaaa6a6646bd3c650'


	return fetch(`http://localhost:8080/o/headless-admin-user/v1.0/user-accounts`, {
		headers: {
			Authorization: 'Bearer 3441f5268541e0faff8c6874954e634a80fdb1e589beccaaaa6a6646bd3c650',
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};
