/*==========================================================================
  DEV: Giordano Lanna
  DATA: 28/01/2025
  ========================================================================== */

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toggleLanguage } from '../../styles/Translation.ts';
import '../styles/App.css';
import '../../styles/setting.tsx';
import '../../styles/Topbar.css';
import '../../styles/colors.css';



function App() {
  const { t, i18n } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState<string>(i18n.language);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>();
  const [rotation, setRotation] = useState<number>(0);
 
// alterar idioma
const handleLanguageChange = useCallback(() => {
  const newLanguage = toggleLanguage(languageSelected, i18n);
  setLanguageSelected(newLanguage);
}, [languageSelected, i18n]);


// alternar temas de cor
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(currentThema => (currentThema === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


// resposta para entrada de login do usuário
  const handleLogin = (e: React.FormEvent) =>{
    e.preventDefault();
    setMessage(
      email && password
        ? t('processing...')
        : t('fill_in_all_fields')
    );
  };

// função de rotação da logo
  const rotateLogo = () => {
    const screenWidth = window.innerWidth;

    // condicional para não girar a logo em proporção de celular
    const rotation = screenWidth > 768? (screenWidth / 12) + 232 : 360;

    setRotation(rotation);
  }

  useEffect(() => {
    window.addEventListener('resize', rotateLogo);
    rotateLogo();
    return () => {
      window.removeEventListener('resize', rotateLogo);
    }
  }, []);

// formatação da barra superior
  const TopBar: React.FC = () => {
    const { t } = useTranslation();

    return (
      <div className="top-bar">
        <div className="logo" style={{ transform: `rotate(${rotation}deg)` }}></div>
        <h2 className="logo-text">AutoBike Store</h2>
        <nav>
          <button onClick={() => (window.location.href='src/Home/home.html')}>{t('home')}</button>
          <button onClick={handleLanguageChange}>
            {t('language')}
          </button>
          <button onClick={toggleTheme} className="theme-toggle">
            <i className="bi bi-sun"></i>
          </button>
        </nav>
      </div>
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
          href="https://chatgpt.com/c/679b87ce-3098-8008-bf37-f0a9df467047">
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

export default App
