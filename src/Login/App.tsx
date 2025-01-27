import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'


function App() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLogin = () =>{
    setMessage(
      email && password
        ? t(`processing`)
        : t('Fill in all fields')
    );
  };



  return (
    <div className="login-container">
      <form className="login-form">
        <label htmlFor="email" data-translate="email">Email</label>
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" data-translate="password">Password</label>
        <input
          type="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handleLogin}>
          {t('Sign_in')}

        </button>

        <a href="https://chatgpt.com/c/678ae1d3-9a48-8008-8d90-eeeca1b4c602" className="forget-password">
          {t('Forgot password?')}
        </a>
      </form>

      {message && <p className={message}>{message}</p>}

      <button onClick={() => handleLanguageChange('en')} >EN</button>
      <button onClick={() => handleLanguageChange('pt')} >PT</button>

    </div>

  );
}

export default App
