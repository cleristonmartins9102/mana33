'use client'

import Styles from './signup-form3.module.scss'

export default function SignupBrands(props: { setStep: (step: number) => void }) {
  const { setStep } = props;
  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">
          Quantas lojas (diferente localização) você possui?
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Inclua todas as lojas mesmo que operam com marcas diferentes.
        </p>

        <form className="space-y-4">
          {[1, 2, 3].map((num) => (
            <button
              onClick={() => setStep(4)}
              key={num}
              type="button"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 text-center shadow hover:bg-gray-100 transition text-gray-700"
            >
              {num} Loja{num > 1 ? 's' : ''}
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
