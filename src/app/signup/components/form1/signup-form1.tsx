'use client'
import Styles from './signup-form1.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../../../i18n'  // caminho do arquivo de inicialização
import { setNestedValue } from '@/app/data/nested-value'

export default function SignupForm1(props: { setStep: (step: number) => void, setForm: any }) {
  const { setStep, setForm } = props

  const { t } = useTranslation('common')

  i18n

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState: any) => {
      const newState = { ...prevState };
      setNestedValue(newState, e.target.name, e.target.value);
      return newState;
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-200"
      >
        <h2 className="text-center text-xl font-medium mb-6 text-gray-700">
          {t('start_selling')}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('business_name')}
              <span className="text-red-500">*</span>
            </label>
            <input
              name='name'
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('register_id')} <span className="text-red-500">*</span>
            </label>
            <input
              name="company.registerNumber"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              required
            />
          </div>
        </div>

        <div className="flex justify-center my-6">
          <div className="bg-teal-600 p-4 rounded-full inline-flex">
            <svg
              className="bg-teal-600"

              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="7" y="6" width="10" height="12" rx="1" fill="white" />
              <line x1="9" y1="9" x2="15" y2="9" stroke="oklch(70.4% .14 182.503)" strokeWidth="1.5" />
              <line x1="9" y1="12" x2="15" y2="12" stroke="oklch(70.4% .14 182.503)" strokeWidth="1.5" />
              <line x1="9" y1="15" x2="13" y2="15" stroke="oklch(70.4% .14 182.503)" strokeWidth="1.5" />
              <path
                d="M16.5 16.5l2-2c.2-.2.5-.2.7 0l.3.3c.2.2.2.5 0 .7l-2 2-1 1-1.4.4.4-1.4 1-1z"
                fill="white"
              />
            </svg>
          </div>


        </div>

        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-gray-700">{t('register_detail')}</p>
          <p className="text-sm text-gray-500">
            {t('fill_you_account_details')}
          </p>
        </div>

        <hr className="mb-4" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="company.email"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              {t('password')}
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-700"
              required
            />
          </div>
        </div>

        <button
          onClick={() => setStep(2)}
          type="submit"
          className="mt-6 w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition"
        >
          {t('next')}
        </button>
      </form>
    </div>
  )
}
