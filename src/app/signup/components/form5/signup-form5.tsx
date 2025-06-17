'use client'

import { useTranslation } from 'react-i18next';
import Styles from './signup-form5.module.scss'
import { i18n } from 'next-i18next';

export default function SignupFinish(props: { setStep: (step: number) => void }) {
  const { setStep } = props;
  const { t } = useTranslation('common')
    
  i18n
  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">{t('signup_complete_text1')}</h2>
        <p className="text-gray-600 text-center mb-4">{t('signup_complete_text2')}</p>
      </div>
    </div>
  );
}

