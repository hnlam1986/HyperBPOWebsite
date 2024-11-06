import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './locales/en.json';
import translationVN from './locales/vn.json';
import translationJP from './locales/jp.json';
i18n.on('languageChanged', function (lng) {
    // if the language we switched to is the default language we need to remove the /en from URL
})
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
    whitelist: ['en', 'vn','jp'],
    
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: translationEN

        },
        vn: {
            translation: translationVN
        },
        jp: {
            translation: translationJP
        },
    },
});

export default i18n;