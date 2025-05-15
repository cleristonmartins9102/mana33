'use client'

import Styles from './signup-form5.module.scss'

export default function SignupFinish(props: { setStep: (step: number) => void }) {
  const { setStep } = props;
  return (
    <div className={[Styles.wrap, 'flex justify-center items-center min-h-screen bg-gray-100'].join(' ')}>
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Obrigado! Nos temos todas as informações que precisamos.</h2>
        <p className="text-gray-600 text-center mb-4">Entraremos em contato com você nos próximos dias para começar a configuração e preparar a sua plataforma.</p>
      </div>
    </div>
  );
}

