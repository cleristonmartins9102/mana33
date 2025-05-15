'use client';

import { HomeIcon, MoneyIcon } from '@/app/components/icons'
import PerformanceGraph from '@/app/components/graphic/performance'
import Styles from './signup.module.scss'
import PerformanceHBar from '@/app/components/graphic/performance-h'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import SignupForm1 from './components/form1/signup-form1';
import SignupResponsable from './components/form2/signup-form2';
import SignupBrands from "./components/form3/signup-form3"
import SignupIndustry from "./components/form4/signup-form4"
import SignupFinish from "./components/form5/signup-form5"

const signupPage = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState<number>(1)

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
        {step === 1 ? <SignupForm1 setStep={setStep}/> : null}
        {step === 2 ? <SignupResponsable setStep={setStep}/> : null }
        {step === 3 ? <SignupBrands setStep={setStep}/> : null }
        {step === 4 ? <SignupIndustry setStep={setStep}/> : null }
        {step === 5 ? <SignupFinish setStep={setStep}/> : null }
      </div>
    </>
  )
}
export default signupPage