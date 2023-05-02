import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
const availableLanguages = ['en', 'pt', 'pt-BR'];
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const option = {
  order:['navigator'],
  checkWhitelist:true
}
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: availableLanguages,
    detection:option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/warzone-dmz-recipes/locales/{{lng}}/{{ns}}.json',
    },
  });
export default i18n;