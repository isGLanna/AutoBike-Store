import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslations from '../.locales/en'
import esTranslations from '../.locales/es'
import ptTranslations from '../.locales/pt'

const i18nConfig = {
  resources: {
    en: {
      ...enTranslations,
    },
    pt: {
      ...ptTranslations,
    },
    es: {
      ...esTranslations,
    },
  },
  lng: 'pt', // idioma inicial
  fallbackLng: 'pt',
  defaultNS: 'translation',
}

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig)

export default i18n
