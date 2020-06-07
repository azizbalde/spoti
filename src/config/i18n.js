import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './translation/en.json';
import translationFR from './translation/fr.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr:{
      translation: translationFR
  }
};

i18n
  .use(reactI18nextModule) 
  .init({
    resources,
    lng: "en",

    keySeparator: false, 

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;