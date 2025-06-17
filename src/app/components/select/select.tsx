import React, { useEffect, useRef, useState } from "react";
import { Input } from "../input/input"

type Params = {
  data: { legend: string, id: string }[]
}

export const Select: React.FC<Params> = ({ data }: Params) => {
  const wrapElement = useRef<HTMLDivElement>(null)
  const inputElement = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<string>()

  useEffect(() => {
    const listenOutSideClick = (e: any) => {
      if (!wrapElement.current?.contains(e.target) && !inputElement.current?.contains(e.target)) {
        // console.log(e.target)
        setTimeout(() => {
          setVisible(false)
        }, 100)
      }
    }

    document.addEventListener('mousedown', listenOutSideClick)

    return () => {
        document.removeEventListener('mousedown', listenOutSideClick)
    }
  }, [])

  return (
    <>
      <Input ref={inputElement} value={currentValue} readOnly className='cursor-pointer' onClick={() => setVisible(prev => !prev)}/>
      {
        visible ? <div className="flex flex-col max-h-[80px] overflow-y-scroll no-scrollbar">
          {data.map((item, i) => <div ref={wrapElement} key={i} 
            onClick={() => setCurrentValue(item.legend)} className='text-gray-700 hover:bg-teal-700 cursor-pointer pt-1.5 pb-1.5 pl-1.5 pr-1.5'>{item.legend}</div>)
          }
        </div> : null
      }
    </>
  )
}