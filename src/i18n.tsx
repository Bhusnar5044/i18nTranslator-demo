import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEnglish from './Translations/English/translations.json';
import translationFrench from './Translations/French/translations.json';
import translationSpanish from './Translations/Spanish/translations.json';

export const resources = {
    en: {
        translation: translationEnglish,
    },
    es: {
        translation: translationSpanish,
    },
    fr: {
        translation: translationFrench,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
