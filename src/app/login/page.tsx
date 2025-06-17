'use client';

import { useTranslation } from 'react-i18next';
import Styles from './login.module.scss'
import i18n from '../../i18n'
import { LoginService } from '../data/features/login-service';
import { useRef, useState } from 'react';
import { AuthError } from '../errors/erros';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();
  const { t } = useTranslation('common')
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  i18n

  const login = async () => {
    const loginService = new LoginService()
     
    const response = await loginService.login(usernameRef.current!.value, passwordRef.current!.value)
    if (response.status === 200) {
      setError(null)
      router.push('/hub')
    } else {
      setError(response.data)
    }
  }
  return (
    <div className={["bg-white h-full w-full flex", Styles.wrap].join(' ')}>
      <div className="w-1/2 flex flex-col justify-end">
        <div className={['bg-teal-700 w-[90%] h-300 relative', Styles.poly].join(' ')}>
          <h1 className="text-white absolute top-[50%] left-[30%] text-6xl text-shadow-lg">Mana33</h1>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col w-[500px]">
          <h1 className="text-gray-700 text-[40px] font-bold">{t('welcome_to_hub')}</h1>
          <p className="mt-5 text-gray-700">{t('login_encorage')}</p>
          <div className="flex flex-col w-full">
            <label htmlFor="" className='text-gray-700 font-bold my-2 text-base'>Email</label>
            <input ref={usernameRef}type="text" placeholder="antony@gmail.com" className="border-red-100 text-gray-700 shadow-custom-inset h-13 p-4 rounded outline-0 bg-[#e8f0fe]" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className='text-gray-700 font-bold my-2 text-base'>{t('password')}</label>
            <input ref={passwordRef} type="text" placeholder="*********" className="border-red-100 text-gray-700 shadow-custom-inset h-13 p-4 rounded outline-0 bg-[#e8f0fe]" />
          </div>
          <button className="mt-6 w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition" onClick={login} >Login</button>
          {error ? <span className='border-1 border-red-600 rounded-[6px] text-red-600 p-2 mt-4 text-center'>{error}</span> : null}
        </div>
      </div>
    </div>
  )
}

export default LoginPage