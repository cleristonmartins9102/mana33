import { MouseEventHandler } from "react"

export const Button = ({ text, onClick, className, disabled }: { text: string, onClick: MouseEventHandler<HTMLButtonElement>, className?: string, disabled?: boolean }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="mt-6 w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition cursor-pointer"
    >
      {text}
    </button>
  )
}