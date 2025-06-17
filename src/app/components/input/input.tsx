import React, { useEffect, useRef } from "react";

type Props = {
  fieldControll?: any,
  condition?: any
  className?: string
  disabled?: boolean
  onClick?: () => void
  value?: string
  ref?: any
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = ({ fieldControll, condition, value, ref, ...props}: Props) => {
  const reference = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (fieldControll) {
      fieldControll.add(reference)
    }

    if (condition) {
      reference.current?.addEventListener('input', condition)
    }

    
  }, [])

  useEffect(() => {
    if (value) {
      if (ref) {
        ref.current!.value = value!
      } else {
        ref.current!.value = value!
      }
    }
  }, [value])

  return (
    <input ref={ref ?? reference} {...props} className={["w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700", props.className].join(' ')} />
  )
}