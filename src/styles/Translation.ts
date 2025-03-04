import { i18n } from 'i18next'

// Função para alternar idiomas
export const toggleLanguage = (nextLanguage: string, i18n: i18n): string => {
  i18n.changeLanguage(nextLanguage)

  return nextLanguage
}
