import {useState} from 'react';

import {getUser} from '../utils/Requests';

function User({token}) {
	const [url, setUrl] = useState([]);
	const [user, setUser] = useState([]);

	const handleGetUser = async () => {
		const data = await getUser(props)
			.then(response => response.json())
			.then(data => setUser(data));
	};

	const props = {
		token: token.access_token,
		url: url,
	}

	return (
		<div>
			<h2>Get User</h2>

			<input
				onChange={client => setUrl(client.target.value)}
				placeholder='URL for get-current-user'
				style={{width: "400px"}}
				type='text'
				value={url}
			/><br />

			<button onClick={handleGetUser}>Get User</button>

			<pre>{
			JSON.stringify(user, null, 2)
			}</pre>

		</div>
	);
}

export default User;
