import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrandCreateF1 } from "./form1/brand-create-f1"
import { BrandCreateF2 } from "./form2/brand-create-f2"

enum BrandCreateForm {
  F1 = 'F1',
  F2 = 'F2',
}

export const BrandCreate = () => {
  const [opened, setOpen] = useState<BrandCreateForm>(BrandCreateForm.F1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'BLACK_SCREEN_ON', payload: true })
  }, [dispatch])
  
  return (
    <div className='fixed inset-0 flex items-center justify-center z-9999'>
      {opened === BrandCreateForm.F1 ? <BrandCreateF1 setOpen={setOpen}/> : null}
      {opened === BrandCreateForm.F2 ? <BrandCreateF2 setOpen={setOpen}/> : null}
    </div>
  )
}