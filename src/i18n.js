import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.ts';
import fr from './locales/fr.ts';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            }

        },
        lng: localStorage.getItem('i18nextLng'),
        fallbackLng: localStorage.getItem('i18nextLng'),
        interpolation: {
            escapeValue: false
        }
    });
