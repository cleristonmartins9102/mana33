'use client'
import Styles from './signup-form2.module.scss'

export default function SignupResponsable(props: { setStep: (step: number) => void }) {
  const { setStep } = props;
  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">
          Detalhes sobre o responsável
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Nós usaremos os detalhes pessoais do responsável pela empresa para entrar em contato quando necessário.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Primeiro Nome</label>
            <input
              type="text"
              placeholder="Antonio"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Último Nome</label>
            <input
              type="text"
              placeholder="Martins"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Telefone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+55 11 3565 8844"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Endereço de email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="email@exemplo.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-300"
            />
            <p className="text-xs text-gray-500 mt-1">
              Nós usaremos esse email para contactar você diretamente.
            </p>
          </div>

          <button
            onClick={() => setStep(3)}
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
          >
            Próximo
          </button>
        </form>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
          <div className="bg-teal-600 h-2 rounded-full w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
