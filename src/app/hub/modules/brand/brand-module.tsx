import { useDispatch } from "react-redux"
import { BrandList, BrandCreate } from "./components"
import { useEffect, useState } from "react"

enum BrandModules {
  List = 'List',
  Create = 'Create',
}

export const BrandModule = () => {
  const [opened, setOpen] = useState<BrandModules | null>(BrandModules.List)
  const dispatch = useDispatch()
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dispatch({ type: 'BLACK_SCREEN_ON', payload: false })
        setOpen(BrandModules.List)
      }
    })
  }, [])
  const handleOpen = (module: BrandModules) => {
    setOpen(module)
  }
  return (
    <div className="h-full flex flex-col bg-amber-50w-full bg-white shadow rounded overflow-hidden">
      <div className="bg-white-700 p-4 ">
        <div className="border-b-2 flex items-center gap-4 pb-2" > 
          <button onClick={() => handleOpen(BrandModules.Create)} className="bg-white text-black font-semibold px-4 py-2 rounded transition-all duration-300 hover:bg-gray-100 hover:shadow-md cursor-pointer">Criar</button>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded transition-all duration-300 hover:bg-gray-100 hover:shadow-md cursor-pointer">Deletar</button>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded transition-all duration-300 hover:bg-gray-100 hover:shadow-md cursor-pointer">Editar</button>
        </div>
      </div>
      <div>
        <BrandList />
        {opened === BrandModules.Create ? <BrandCreate /> : null}
      </div>  
    </div>
  )
}