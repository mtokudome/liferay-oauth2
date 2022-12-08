import React, {useState} from 'react';

import Authorize from './components/Authorize';
import Token from './components/Token';
import User from './components/User';

function App() {
	const [code, setCode] = useState('');
	const [token, setToken] = useState({});

	function handleCode(code) {
		setCode(code);
	}

	function handleToken(token) {
		setToken(token);
	}

	return (
		<div>
			<h1>Authorization Code Flow</h1>
			<Authorize handleCode={handleCode} />

			<Token handleToken={handleToken} code={code} />

			<User token={token} />
		</div>
	);
}

export default App;
