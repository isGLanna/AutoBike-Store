import { i18n } from 'i18next';

// Array contendo os códigos dos idiomas suportados
const languages = ['pt', 'en', 'es', 'fr'];

// Função para alternar idiomas
export const toggleLanguage = (currentLanguage: string, i18n: i18n): string => {
  
  const currentIndex = languages.indexOf(currentLanguage);

  // Calcula o próximo idioma
  const nextIndex = (currentIndex + 1) % languages.length;
  const nextLanguage = languages[nextIndex];

  i18n.changeLanguage(nextLanguage);

  return nextLanguage;
};