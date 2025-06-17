'use client'
import Styles from './signup-form2.module.scss'
import { setNestedValue } from '@/app/data/nested-value';
import i18n from '../../../../i18n'
import { useTranslation } from 'react-i18next';

export default function SignupResponsable(props: { setStep: (step: number) => void , setForm: any}) {
  const { setStep, setForm } = props;

  const { t } = useTranslation('common')

  i18n
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState: any) => {
      const newState = { ...prevState };
      setNestedValue(newState, e.target.name, e.target.value);
      return newState;
    });
  }

  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">
          {t('responsable_detail')}
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          {t("warn_responsable_details")}
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">{t('firstName')}</label>
            <input
              onChange={handleChange}
              name='owner.firstName'
              type="text"
              placeholder="Antonio"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-300 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">{t('lastName')}</label>
            <input
              onChange={handleChange}
              name='owner.lastName'
              type="text"
              placeholder="Martins"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-300 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              {t('phone')} <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              name='owner.phone'
              type="tel"
              placeholder="+55 11 3565 8844"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              name='owner.email'
              type="email"
              placeholder="email@exemplo.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-300 text-gray-700"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t('warn_responsable_details_future')}
            </p>
          </div>

          <button
            onClick={() => setStep(3)}
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
          >
            {t('next')}
          </button>
        </form>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
          <div className="bg-teal-600 h-2 rounded-full w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
