/*==========================================================================
  DEV: Giordano Lanna
  DATA: 28/01/2025
  ========================================================================== */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TopBar } from '../../sub-components/TopBar.tsx'
import "../styles/App.css"


export default function App() {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>();

// resposta para entrada de login do usuário
  const handleLogin = (e: React.FormEvent) =>{
    e.preventDefault();
    setMessage(
      email && password
        ? t('processing...')
        : t('fill_in_all_fields')
    );
  };

  
// Função principal
  return (
    <div className="login-container">
      <TopBar />

      <form className="login-form" onSubmit={handleLogin}>

          <input
            id="email"
            type="email"
            placeholder={t('ph email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        /> 

        <input
          id="password"
          type="password"
          placeholder={t('ph password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          onClick={handleLogin}>
          {t('sign in')}
        </button>

        <a 
          onClick={() => (window.location.href = 'src/CreateAccount/index.html')}>
          {t('create account')}
        </a>

        <a 
          href="https://chatgpt.com/c/678ae1d3-9a48-8008-8d90-eeeca1b4c602" className="forget-password">
          {t('forgot password')}
        </a>

      </form>


      {message && (
        <p className={email && password ? 'response-login-1' : 'response-login-0'}>
          {message}
        </p>
      )}

    </div>
  );
}
