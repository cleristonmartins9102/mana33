import Styles from './menu.module.scss'
import i18n from '../../../../../i18n'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/app/hub/components'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function Menu ({ position, visible }: any) {
  i18n
  const { t } = useTranslation('common')
  const wrapElement = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const setLeftSliderForm = (formName: string) => {
    dispatch({ type: 'LEFT_SLIDER_ON', payload: true })
  }

  useEffect(() => {
    const listenOutSideClick = (e: any) => {
      if (!wrapElement.current?.contains(e.target)) {
        visible(false)
      }
    }

    document.addEventListener('mousedown', listenOutSideClick)

    return () => {
        document.removeEventListener('mousedown', listenOutSideClick)
    }
  }, [])
  
  return (
    <div ref={wrapElement} style={{ left: position.x - 300, top: position.y}} className={Styles.wrap}>
      <h1 className='text-gray-700 font-bold text-2xl pb-4'>{t('create')}</h1>
      <Brand onClick={setLeftSliderForm} />
    </div>
  )
}