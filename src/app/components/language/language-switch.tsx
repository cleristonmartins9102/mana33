'use client'
import { useEffect, useState } from 'react'
import i18n from '../../../i18n'  // caminho do arquivo de inicialização

import Styles from './langhage-switch.module.scss';

export default function LanguageSwitcher() {
  const [opened, setOpened] = useState(false)
  useEffect(() => {
    document.addEventListener('keyup', (k) => {
      if (k.key === 'Escape') setOpened(false)
    } )
  }, [])

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpened(false)
  }
  
  return (
    <>
      <div className='relative'>
          <span className={[Styles.btn, 'relative'].join(' ')} onClick={() => setOpened(!opened)}>Idioma</span>
          {opened ? <div className='absolute flex flex-col bg-gray-100 text-gray-700	rounded'>
            <span className='leading-10 cursor-pointer hover:bg-gray-900 hover:text-white pl-4 pr-4' onClick={() => changeLang('pt')}>Português</span>
            <span className='leading-10 cursor-pointer hover:bg-gray-900 hover:text-white pl-4 pr-4' onClick={() => changeLang('en')}>English</span>
          </div> : null}
      </div>
    </>
  )
}
