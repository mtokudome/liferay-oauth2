import React from 'react';

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import AuthorizationCodeFlow from './routes/authorization-code-flow/pages/AuthorizationCodeFlow';
import ClientCredentialsFlow from './routes/client-credentials-flow/pages/ClientCredentialsFlow';
import ResourceOwnerPasswordCredentialsFlow from './routes/resource-owner-password-credentials-flow/pages/ResourceOwnerPasswordCredentialsFlow';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<nav>
					<ul>
						<li>
							<Link to='/authorization-code-flow'>Authorization Code Flow</Link>
						</li>
						<li>
							<Link to='/client-credentials-flow'>Client Credentials Flow</Link>
						</li>
						<li>
							<Link to='/resource-owner-password-credentials-flow'>Resource Owner Password Credentials Flow</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/authorization-code-flow' element={<AuthorizationCodeFlow />} />
					<Route path='/client-credentials-flow' element={<ClientCredentialsFlow />} />
					<Route path='/resource-owner-password-credentials-flow' element={<ResourceOwnerPasswordCredentialsFlow />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
