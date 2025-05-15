import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../../components/button/button"

type Props = {
  setOpen: Function
}

export const BrandCreateF2 = ({ setOpen }: Props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'BLACK_SCREEN_ON', payload: true })
  }, [dispatch])

  const handleReturntForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen('F1')
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center z-9999'>
      <div className="border border-gray-300 rounded bg-white w-2xl p-6 flex flex-col items-center">
        <div>
          <span className='text-gray-800 text-2xl'>Localizacão</span>
        </div>
        <div className='w-full'>
          <hr className="border-1 border-gray-200 my-5 w-full" />
        </div>
        <form action="" className="w-full flex flex-col gap-4">
          <div className="w-full">
            <label className="block text-sm font-semibold mb-1 text-gray-700 w">Endereço</label>
            <input type="text" name='address' placeholder='Av do Rio Pequeno' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required />
          </div>
          <div className="flex gap-4">
            <div className="w-sm">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Número</label>
              <input type="text" name='number' placeholder='101' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required />
            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Complemento</label>
              <input type="text" name='number' placeholder='Casa 1' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-sm">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Cep</label>
              <input type="text" name='zip_code' placeholder='05379050' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required />
            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Bairro</label>
              <input type="text" name='neibohoor' placeholder='Butanta' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-sm">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Estado</label>
              <input type="text" name='state' placeholder='SP' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required />
            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold mb-1 text-gray-700">Cidade</label>
              <input type="text" name='city' placeholder='Sao Paulo' className="w-full border border-gray-300 text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required />
            </div>
          </div>
          <div className="flex gap-4">
            <Button text="Voltar" onClick={handleReturntForm}/>
            <Button text="Salvar" onClick={() => setOpen('F1')}/>
          </div>
        </form>
      </div>

    </div>
  )
}