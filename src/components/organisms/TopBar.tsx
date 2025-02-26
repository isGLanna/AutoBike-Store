import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toggleLanguage } from '../../styles/Translation'
import { Link } from '@tanstack/react-router';
import '../styles/topbar.css';
import '../styles/colors.css';


export const TopBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [rotation, setRotation] = useState<number>(0);
  const [languageSelected, setLanguageSelected] = useState<string>(i18n.language);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Alterar idioma
  const handleLanguageChange = useCallback(() => {
    const newLanguage = toggleLanguage(languageSelected, i18n);
    setLanguageSelected(newLanguage);
  }, [languageSelected, i18n]);

  // Alterar tema de cores
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const rotateLogo = () => {
    const screenWidth = window.innerWidth;
    const rotation = screenWidth > 720 ? (screenWidth / 12) + 232 : 360;
    setRotation(rotation);
  };

  useEffect(() => {
    window.addEventListener('resize', rotateLogo);
    rotateLogo();
    return () => {
      window.removeEventListener('resize', rotateLogo);
    };
  }, []);

  return (
    <div className="top-bar">
      <div className="logo" style={{ transform: `rotate(${rotation}deg)` }}></div>
      <h2 className="logo-text">AutoBike Store</h2>
      <nav>
        <Link to="/">
          <button>
            Home
          </button>
        </Link>
        
        <button style={{ fontSize: '16px', cursor: 'pointer' }}
          onClick={handleLanguageChange}>{t('language')}</button>
        <button style={{ fontSize: '16px', cursor: 'pointer' }}
          onClick={toggleTheme} className="theme-toggle">
          <i className="bi bi-sun"></i>
        </button> 

      </nav>
    </div>
  );
};
