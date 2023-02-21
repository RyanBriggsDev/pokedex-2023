import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div
      id="card"
      className="rounded shadow bg-white text-black w-full p-3 flex items-center justify-center flex-col"
    >
      {children}
    </div>
  )
}
