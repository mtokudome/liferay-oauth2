import React from 'react';

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import AuthorizationCodeFlow from './routes/authorization-code-flow/pages/AuthorizationCodeFlow';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<nav>
					<ul>
						<li>
							<Link to='/authorization-code-flow'>Authorization Code Flow</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/authorization-code-flow' element={<AuthorizationCodeFlow />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
