import Styles from './left-slider.module.scss'
import i18n from '../../../../i18n'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { CreateCompanyForm } from '../brand/components'

export const LeftSlider: React.FC = () => {
  i18n
  const { t } = useTranslation('common')
  const wrapElement = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const listenOutSideClick = (e: any) => {
      console.log('here')
      if (!wrapElement.current?.contains(e.target)) {
        dispatch({ type: 'LEFT_SLIDER_ON', payload: false })
      }
    }

    document.addEventListener('mousedown', listenOutSideClick)

    return () => {
        document.removeEventListener('mousedown', listenOutSideClick)
    }
  }, [])
  return (
    <div ref={wrapElement}  className={Styles.wrap}>
      <CreateCompanyForm />
    </div>
  )
}