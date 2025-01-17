import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () =>{
    setMessage(
      email && password
        ? `Logando`
        : `Preencha todos os campos`
    );
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <label htmlFor="password">E-mail</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handleLogin}>
          Sign in
        </button>

        <a href="https://chatgpt.com/c/678ae1d3-9a48-8008-8d90-eeeca1b4c602" className="forget-password">
          Forgot password?
        </a>
      </form>

      {message && <p className={message}>{message}</p>}
    </div>
  );
}

export default App
