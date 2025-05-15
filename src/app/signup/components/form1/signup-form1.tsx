'use client'
import Styles from './signup-form1.module.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function SignupForm1(props: { setStep: (step: number) => void }) {
  const { setStep } = props
  const [form, setForm] = useState({
    restaurant: '',
    cnpj: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-200"
      >
        <h2 className="text-center text-xl font-medium mb-6 text-gray-700">
          Inicie suas vendas com a Mana33
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Nome do restaurante <span className="text-red-500">*</span>
            </label>
            <input
              name="restaurant"
              value={form.restaurant}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              CNPJ <span className="text-red-500">*</span>
            </label>
            <input
              name="cnpj"
              value={form.cnpj}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
          <p className="text-sm font-semibold text-gray-700">Detalhes do cadastro</p>
          <p className="text-sm text-gray-500">
            Entre com os dados da sua conta principal
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
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Senha
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>
        </div>

        <button
          onClick={() => setStep(2)}
          type="submit"
          className="mt-6 w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition"
        >
          Proximo
        </button>
      </form>
    </div>
  )
}
