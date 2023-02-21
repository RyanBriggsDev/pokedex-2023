import { ReactNode } from 'react'

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`container flex justify-center flex-col items-center px-3 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

type ContainerProps = {
  children: ReactNode
  className?: string
}
