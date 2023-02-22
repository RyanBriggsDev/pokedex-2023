import { ReactNode } from 'react'

export default function Card({
  children,
  index,
  className,
  handleClick,
}: CardProps) {
  return (
    <div
      key={index}
      id="card"
      className={`rounded shadow bg-white text-black w-full p-3 flex items-center justify-center flex-col ${
        className ? className : ''
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

type CardProps = {
  children: ReactNode
  index?: any
  className?: string
  handleClick?: () => void
}
