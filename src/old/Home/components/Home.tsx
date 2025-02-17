/*==========================================================================
  DEV: Giordano Lanna
  DATA: 11/02/2025
  ========================================================================== */

import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toggleLanguage } from '../../../styles/Translation.ts'
import '../styles/main.css'
import '../../styles/Topbar.css'
import '../../styles/colors.css'

function Home() {
  const { t, i18n } = useTranslation()
  const [languageSelected, setLanguageSelected] = useState<string>(
    i18n.language
  )
  const [rotation, setRotation] = useState<number>(0)

  // alterar idioma
  const handleLanguageChange = useCallback(() => {
    const newLanguage = toggleLanguage(languageSelected, i18n)
    setLanguageSelected(newLanguage)
  }, [languageSelected, i18n])

  // função de rotação da logo
  const rotateLogo = () => {
    const screenWidth = window.innerWidth

    // condicional para não girar a logo em proporção de celular
    const rotation = screenWidth > 768 ? screenWidth / 12 + 232 : 360

    setRotation(rotation)
  }

  useEffect(() => {
    window.addEventListener('resize', rotateLogo)
    rotateLogo()
    return () => {
      window.removeEventListener('resize', rotateLogo)
    }
  }, [])

  // alternar temas de cor
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme((currentThema) => (currentThema === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <body>
      <div className="top-bar">
        <div
          className="logo"
          style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
        <h2 className="logo-text">AutoBike Store</h2>
        <nav>
          <button onClick={() => (window.location.href = 'main.tsx')}>
            Não Funcional
          </button>
          <button onClick={handleLanguageChange}>{t('language')}</button>
          <button onClick={toggleTheme} className="theme-toggle">
            <i className="bi bi-sun"></i>
          </button>
        </nav>
      </div>

      <div>
        <h1>{t('main text')}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          officiis eligendi quos fugit soluta impedit, consequuntur iure a
          explicabo, totam voluptas autem, ut illo nemo! Cupiditate sed
          excepturi rem commodi?
        </p>
      </div>
    </body>
  )
}

export default Home
