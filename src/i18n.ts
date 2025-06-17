console.log('CLERISTON')
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import common_en from '../public/locales/en/common.json'
import common_pt from '../public/locales/pt/common.json'
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: common_en },
        pt: { common: common_pt }
      },
      lng: 'pt',
      fallbackLng: 'pt',
      interpolation: {
        escapeValue: false
      }
    })
}

export default i18n
