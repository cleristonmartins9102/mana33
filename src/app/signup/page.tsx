'use client';

import { HomeIcon, MoneyIcon } from '@/app/components/icons'
import PerformanceGraph from '@/app/components/graphic/performance'
import Styles from './signup.module.scss'
import PerformanceHBar from '@/app/components/graphic/performance-h'
import { useDispatch } from 'react-redux'
import { useEffect, useState, useTransition } from 'react';
import SignupForm1 from './components/form1/signup-form1';
import SignupResponsable from './components/form2/signup-form2';
import SignupBrands from "./components/form3/signup-form3"
import SignupIndustry from "./components/form4/signup-form4"
import SignupFinish from "./components/form5/signup-form5"
import i18n from '../../i18n'  // caminho do arquivo de inicialização
import { useTranslation } from 'react-i18next';
import { CreateOrganizationModel } from '../data/models/create-organization-model';
import { SignupService } from '../data/features/signup-service';

const signupPage = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState<number>(1)
  const { t } = useTranslation('common')
  const [form, setForm] = useState<CreateOrganizationModel>({
    name: '',
    password: '',
    owner: {
      firstName: '',
      lastName: '',
      coutryDialCode: '55',
      phone: '',
      email: ''
    },
    company: {
      fullName: '',
      shorName: '',
      registerNumber: '',
      email: '',
      countryDialCode: '55',
      phone: '',
      industry: '',
      quantityStores: 0,
      store: {
        name: '',
        countryDialCode: '55',
        phone: '',
        email: '',
        location: {
          address: '',
          number: '',
          zipCode: '',
          countryCode: 'BR',
          country: '',
          city: '',
          coordenates: {
            lat: 0,
            lng: 0
          }
        }
      }
    }
  })
    useEffect(() => {
      if (step === 5) {
        const signupService = new SignupService()
        const { company } = form
        signupService.signup({...form, company: {...company, fullName: form.name } }).then(r => console.log(r))
      }
    }, [step])

  useEffect(() => {
    dispatch({ type: 'BLACK_SCREEN_ON', payload: true })
  }, [dispatch])
  
  
  return (
    <>
      <div className={Styles.wrap}>
        <div className={Styles.left_bar}>
          <div className={Styles.wrap_title}>
            <span>Mana33</span>
          </div>
          <div className={Styles.wrap_home}>
              <HomeIcon />
              <div className={Styles.wrap_cube_home}>
                <div className={Styles.cube}></div>
              </div>
          </div>
          <div className={Styles.wrap_home}>
              <MoneyIcon />
              <div className={Styles.wrap_cube}>
                <div className={Styles.cube}></div>
              </div>
          </div>
        </div>
        <div className={Styles.right_side}>
            <PerformanceHBar />
            <PerformanceGraph />
        </div>
        {step === 1 ? <SignupForm1 setStep={setStep} setForm={setForm}/> : null}
        {step === 2 ? <SignupResponsable setStep={setStep} setForm={setForm}/> : null }
        {step === 3 ? <SignupBrands setStep={setStep} setForm={setForm}/> : null }
        {step === 4 ? <SignupIndustry setStep={setStep} form={form} setForm={setForm}/> : null }
        {step === 5 ? <SignupFinish setStep={setStep}/> : null }
      </div>
    </>
  )
}
export default signupPage