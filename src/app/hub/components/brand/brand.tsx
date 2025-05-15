import { Modules } from '@/app/data/models/module-model.'
import Styles from './modules-button.module.scss'

type Props = {
  currentModule: any
  setModule: Function
}

export const Brand = ({ currentModule, setModule }: Props) => {
  const handleModuleChange = (newModule: Modules) => {
    setModule(newModule)
  }
  return (
    <div onClick={() => handleModuleChange(Modules.Brand)} className={[Styles.wrap_home, 'cursor-pointer'].join(' ')}>
      <svg className={`w-10 h-10 ${currentModule === Modules.Brand ? "text-teal-700" : "text-gray-500"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="10" />
        <path d="M60 140 L60 80 L100 50 L140 80 L140 140 Z" fill="currentColor" />
        <path d="M100 90 L100 140" stroke="currentColor" strokeWidth="8" />
        <circle cx="100" cy="100" r="6" fill="currentColor" />
        <rect x="90" y="120" width="20" height="20" fill="white" />
      </svg>
      <div className={Styles.wrap_legend}>
        <span className={`text-gray-700 ${currentModule === Modules.Brand ? "font-bold" : null}`}>Marca</span>
      </div>
    </div>
  )
}