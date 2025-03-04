import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toggleLanguage } from '@/styles/Translation'
import { Link } from '@tanstack/react-router'
import { toggleSettings }  from '../../molecules/fomulario/settings/settings'

import styles from './topbar.module.scss'
import '@/styles/colors.css'
import logo from '@/assets/gallery/logo.png'



export const TopBar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [rotation, setRotation] = useState<number>(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Alterar o tema de cores
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  // Efetuar rotação da logo
  const rotateLogo = () => {
    const screenWidth = window.innerWidth
    const rotation = screenWidth > 720 ? screenWidth / 12 + 232 : 360
    setRotation(rotation)
  }

  useEffect(() => {
    window.addEventListener('resize', rotateLogo)
    rotateLogo()
    return () => {
      window.removeEventListener('resize', rotateLogo)
    }
  }, [])

  return (
    <div className={styles.top_bar}>
      <Link to='/create-account'>
        <img
          alt="logo"
          src={logo}
          className={styles.logo}
          style={{ transform: `rotate(${rotation}deg)` }}/>
      </Link>
      <h2 className={styles['logo-text']}>AutoBike Store</h2>
      <nav>
        <button 
          style={{borderLeft:'2px solid #ffffff60'}} onClick={() => toggleLanguage('pt', i18n)}>
          {t('about us')}
        </button>
        <button
          style={{borderLeft:'2px solid #ffffff60'}}> 
          {t('tutorials')}
        </button>

        {toggleSettings()}
      </nav>
    </div>
  )
}
