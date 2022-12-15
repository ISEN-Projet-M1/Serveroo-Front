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
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false
        }
    });
