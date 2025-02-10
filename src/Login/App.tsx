/*==========================================================================
  DEV: Giordano Lanna
  DATA: 28/01/2025
  ========================================================================== */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';


function App() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLogin = (e: React.FormEvent) =>{
    e.preventDefault();
    setMessage(
      email && password
        ? t('processing')
        : t('fill_in_all_fields')
    );
  };

  const TopBar: React.FC = () => {
    const { t } = useTranslation();
    return (
      <div className="top-bar">
        <h1 className="logo">AutoBike Store</h1>
        <nav>
          <button>{t('home')}</button>
          <button>{t('about')}</button>
          <button onClick={() => handleLanguageChange('en')} >EN</button>
        </nav>

      </div>
    );
  };


  return (
    <div className="login-container">
      <TopBar />

      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder={t('password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handleLogin}>
          {t('sign_in')}

        </button>
        <a href="https://chatgpt.com/c/678ae1d3-9a48-8008-8d90-eeeca1b4c602" className="forget-password">
          {t('forgot password?')}
        </a>
        <a href="https://chatgpt.com/c/679b87ce-3098-8008-bf37-f0a9df467047">
          {t('create_account')}
        </a>
      </form>

      {message && <p className={message.includes('Fill') ? 'error-message' : 'success-message'}>{message}</p>}


    </div>

  );
}

export default App
