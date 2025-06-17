'use client'

import { CreateOrganizationModel } from '@/app/data/models/create-organization-model';
import Styles from './signup-form3.module.scss'
import { useTranslation } from 'react-i18next';
import { i18n } from 'next-i18next';
import { setNestedValue } from '@/app/data/nested-value';

export default function SignupBrands(props: { setStep: (step: number) => void, setForm: any }) {
  const { setStep, setForm } = props;
  const { t } = useTranslation('common')

  i18n
  
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, num: number) => {
    setForm((prevState: any) => {
      const newState = { ...prevState };
      setNestedValue(newState, (e.target as any).name, num);
      return newState;
    });
    setStep(4)
  }

  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">
          {t('many_stores_question')}
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          {t('include_many_stores_question')}
        </p>

        <form className="space-y-4">
          {[1, 2, 3].map((num) => (
            <button
              name='company.quantityStores'
              onClick={(e) => handleChange(e, num)}
              key={num}
              type="button"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 text-center shadow hover:bg-gray-100 transition text-gray-700"
            >
              {num} {t('store')}{num > 1 ? 's' : ''}
            </button>
          ))}
        </form>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
          <div className="bg-teal-500 h-2 rounded-full w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
