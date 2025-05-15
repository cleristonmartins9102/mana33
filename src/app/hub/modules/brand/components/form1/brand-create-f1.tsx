import { Button } from "@/app/hub/components/button/button"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

type Props = {
  setOpen: Function
}

export const BrandCreateF1 = ({ setOpen }: Props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'BLACK_SCREEN_ON', payload: true })
  }, [dispatch])

  const handleNextForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen('F2')
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center z-9999'>
      <div className="border border-gray-300 rounded bg-white w-2xl p-6 flex flex-col items-center">
        <div>
          <span className='text-gray-800 text-2xl'>Detalhes sobre a marca</span>
        </div>
        <div className='w-full'>
          <hr className="border-1 border-gray-200 my-5 w-full" />
        </div>
        <form action="" className="w-full flex flex-col gap-4">
          <div className="className">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Razão Social</label>
            <input type="text" name='razao_social' placeholder='Frangolino Lanches' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required />
          </div>
          <div className="className">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Nome Fantasia</label>
            <input type="text" name='nome_fantasia' placeholder='Frangolino' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required />
          </div>
          <div className="className">
            <label className="block text-sm font-semibold mb-1 text-gray-700">CNPJ</label>
            <input type="text" name='nome_fantasia' placeholder='Frangolino' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required />
          </div>
          <div className="className">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Telefone</label>
            <input type="text" name='nome_fantasia' placeholder='Frangolino' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required />
          </div>
          <div className="className">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
            <input type="text" name='nome_fantasia' placeholder='Frangolino' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required />
          </div>
          <Button text="Próximo" onClick={handleNextForm}/>
        </form>
      </div>

    </div>
  )
}