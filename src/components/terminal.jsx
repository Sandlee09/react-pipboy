// TerminalComponent.js
import React, { useState } from 'react';

const TerminalComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Authentication logic goes here
    if (username === 'admin' && password === 'password') {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="terminal">
      <div className="terminal-header">Fallout Terminal</div>
      <div className="terminal-body">
        <div className="terminal-output">
          {authenticated ? (
            <p>Welcome, Admin! Access Granted.</p>
          ) : (
            <p>Enter username and password to continue...</p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default TerminalComponent;
