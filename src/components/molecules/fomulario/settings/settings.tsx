import { useState, useCallback, useEffect } from 'react';
import { toggleLanguage } from '@/styles/Translation';
import { useTranslation } from 'react-i18next';
//import { Items } from 'menuItems';
import { ImCog, ImCart, ImEarth } from "react-icons/im";
import { GrLogin, GrLogout } from "react-icons/gr";
import styles from './settings.module.scss';


export function toggleSettings(){
  const { t, i18n } = useTranslation();
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false);
  const [languageSelected, setLanguageSelected] = useState<string>('');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Alterar idioma
  const handleLanguageChange = (selectedLanguage: string) => {
    const newLanguage = toggleLanguage(languageSelected, i18n);
    setLanguageSelected(newLanguage);
  };

  // Alterar estado do botão settings
  const handleSettings = () => {
    setmenuIsOpen(menuIsOpen => !menuIsOpen)
  };

  // Alterar o tema de cores
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <button style={{borderLeft:'2px solid #ffffff60', marginRight:'15px'}} onClick={handleSettings}>
        <ImCog 
          className={`transform-gpu duration-500 ease-in ${menuIsOpen ? 'rotate-180' : ''}`}
          size={'30px'} 
        />
      </button>
      <div className={`${styles.menu} ${menuIsOpen ? styles.open : ''}`}>
        <div className={styles['theme-toggle']} onClick={toggleTheme} > <i className="bi bi-sun" /> </div>
        <div className={styles.item} onClick={() => toggleLanguage('pt', i18n)}>PT</div>
        <div className={styles.item} onClick={() => toggleLanguage('en', i18n)}>EN</div>
        <div className={styles.item} onClick={() => toggleLanguage('es', i18n)}>ES</div>
      </div>
    </div>
  )
}