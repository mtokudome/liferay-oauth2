import React, {useEffect, useState} from 'react';

import {getUsers} from './utils/Requests';

function Users() {
	const [objects, setObjects] = useState([]);

	const get = () => {
		getUsers()
			.then(response => response.json())
			.then(data => setObjects(data.items));
	};

	useEffect(() => {
		get();
	}, []);

	return (
		<div>
			<h2>List of Users</h2>

			{objects.map(items => (
				<div key={items.id}>
					{items.givenName} {items.familyName} {items.emailAddress}
				</div>
			))}
		</div>
	);
}

export default Users;
