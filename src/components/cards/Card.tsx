import { ReactNode } from 'react'

export default function Card({
  children,
  index,
  className,
  padding,
  handleClick,
}: CardProps) {
  return (
    <div
      key={index}
      id="card"
      className={`rounded shadow bg-white text-black w-full flex items-center justify-center flex-col ${
        padding && 'p-3'
      } ${className ? className : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

type CardProps = {
  children: ReactNode
  index?: number
  className?: string
  padding?: boolean
  handleClick?: () => void
}
