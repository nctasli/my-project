import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translationEN.json';
import translationTR from '../locales/tr/translationTR.json';

const resources = {
    en:{
        translation: translationEN
    },
    tr:{
        translation: translationTR
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'tr',


        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;