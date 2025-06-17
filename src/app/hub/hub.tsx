'use client';

import Styles from './hub.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import React, { ReactElement, useEffect, useState } from 'react';
import { Modules } from '../data/models/module-model.';
import { Brand, Customers, Products, Stores } from './components';
import { BrandModule } from "./modules/brand/brand-module"
import HubHeader from './header/page';
import Menu from './header/components/menu/menu';
import { LeftSlider } from './components/left-slider/left-slider';

type StateType = {
  left_bar: boolean
}

type Props = {
  companies: ReactElement
}

const Hub = ({ companies }: Props) => {
  const dispatch = useDispatch()
  const [module, setModule] = useState<Modules>()
  const [config, setConfig] = useState<StateType>({ left_bar: true })
  const [menuConfig, setMenuConfig] = useState<{ position: {y: number, x: number}, activated: boolean }>()
  const leftSliderState = useSelector((state: { screen: { leftSlider: boolean }}) => state.screen.leftSlider)

  useEffect(() => {
    dispatch({ type: 'BLACK_SCREEN_ON', payload: false })
  }, [dispatch])

  return (
    <>
      <div className={[Styles.wrap, 'relative'].join(' ')}>
        {leftSliderState ? <LeftSlider/> : null}
        {menuConfig?.activated && <Menu position={menuConfig.position} visible={(value: boolean) => setMenuConfig(prev => ({ ...prev, activated: value }) as any)}/>}
        <div className='relative flex flex-col w-full h-full'>
          <HubHeader showMenu={setMenuConfig}/>
          <div className='flex w-full h-full'>
            <div className={[Styles.left_bar, 'transiction-all duration-300 ', config.left_bar === false ? 'absolute z-20 -translate-x-full' : 'translate-x-0'].join(' ')}>
              <div className={['flex justify-end p-1 cursor-pointer absolute transiction-all duration-340', config.left_bar === false ? 'translate-x-70' : 'translate-x-53'].join(' ')}>
                <button onClick={() => setConfig({ left_bar: !config.left_bar })}>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2008_157)">
                      <path d="M14.5 9.66666L9.66669 14.5M9.66669 14.5L14.5 19.3333M9.66669 14.5H19.3334M26.5834 14.5C26.5834 21.1734 21.1735 26.5833 14.5 26.5833C7.82658 26.5833 2.41669 21.1734 2.41669 14.5C2.41669 7.82655 7.82658 2.41666 14.5 2.41666C21.1735 2.41666 26.5834 7.82655 26.5834 14.5Z" stroke="#009689" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2008_157">
                        <rect width="29" height="29" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </button>
              </div>
              <div className='flex flex-col gap-2 p-6'>
                <div className={Styles.wrap_title}>
                  <span>Mana33</span>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <Products currentModule={module} setModule={setModule} />
                  <Customers currentModule={module} setModule={setModule} />
                  <Stores currentModule={module} setModule={setModule} />
                </div>
              </div>

            </div>
            <div className='w-full px-8 py-8 transition-all duration-300'>
              <BrandModule />
              {/* <PerformanceHBar /> */}
              {/* <PerformanceGraph /> */}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Hub