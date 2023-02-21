import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items -center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
