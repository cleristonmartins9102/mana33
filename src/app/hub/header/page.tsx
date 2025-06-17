'use client'

import Styles from './header.module.css'
import Menu from "./components/menu/menu"
import LaunchIcon from '../components/icons/launch-icon'
import { MouseEventHandler } from 'react'

type Props = {
  showMenu: React.Dispatch<React.SetStateAction<{ position: {y: number, x: number}, activated: boolean } | undefined>>
}

export default function HubHeader({ showMenu }: Props) {
  const menuPosition = (e: any) => {
    const position = e.currentTarget.getBoundingClientRect()
    showMenu(prev => ({...prev, position: { y: position.bottom, x: position.left  }, activated: true }))
  } 
  return (
    <div className={['pt-3 pb-3 pr-6 flex justify-end gap-2.5', Styles.wrap].join(' ')}>
      <span className="w-15 h-15 rounded-full bg-teal-700 text-white flex items-center justify-center text-center relative" onClick={menuPosition}><LaunchIcon /></span>
      <span className="w-15 h-15 rounded-full bg-teal-700 text-white flex items-center justify-center text-center relative">Foto</span>
    </div>
  )
}