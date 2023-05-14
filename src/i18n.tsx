// import the original type declarations
// import 'i18next';
// import all namespaces (for the default language, only)
// import ns1 from 'locales/en/ns1.json';
// import ns2 from 'locales/en/ns2.json';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    greeting: 'Hello, world!',
                },
            },
            fr: {
                translation: {
                    greeting: 'Bonjour, monde!',
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

// declare module 'i18next' {
//     // Extend CustomTypeOptions
//     interface CustomTypeOptions {
//         // custom namespace type, if you changed it
//         defaultNS: 'ns1';
//         // custom resources type
//         resources: {
//             ns1: typeof ns1;
//             ns2: typeof ns2;
//         };
//         // other
//     }
// }
export default i18n;
