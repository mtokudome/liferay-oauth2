import {useState} from 'react';

import Authorize from './components/Authorize';
import Token from './components/Token';
import Users from './components/Users';

function App() {
  const [code, setCode] = useState('');
  const [token, setToken] = useState({});

  function handleCode(code) {
    setCode(code);
  }

  function handleToken(token) {
    setToken(token)
  }

  return (
    <div>

     <Authorize handleCode={handleCode} />

     <Token handleToken={handleToken} code={code} />

     <Users token={token} />

    </div>
  );
}

export default App;
