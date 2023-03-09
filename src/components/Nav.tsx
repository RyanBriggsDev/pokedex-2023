import Container from './Container'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const hamburgerLineClass: string =
    'w-8 h-[2px] bg-black duration-300 ease-in-out'

  return (
    <nav className="h-10 flex items-center justify-center relative">
      <Container>
        <div className="flex justify-between w-full">
          <Link href={'/'}>Pokédex</Link>
          <div
            className="flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            id="hamburger-button"
            onClick={() => setNavOpen(!navOpen)}
          >
            <div
              className={`${hamburgerLineClass} ${
                navOpen && 'translate-y-[7px] rotate-45'
              }`}
            ></div>
            <div
              className={`${hamburgerLineClass} ${
                navOpen && 'translate-x-[-100vw]'
              }`}
            ></div>
            <div
              className={`${hamburgerLineClass} ${
                navOpen && '-translate-y-[7px] -rotate-45'
              }`}
            ></div>
          </div>

          <ul
            id="hamburger-menu"
            className={`absolute z-[100] flex flex-col bg-gray-200 top-10 left-0 w-full text-center origin-top-right duration-300 ease-in-out scale-0 items-center justify-center shadow
            ${navOpen && 'scale-100'}`}
          >
            <Link
              className="w-full md:w-1/2 py-2 hover:bg-white/[0.5]"
              href="/"
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
            <Link
              className="w-full md:w-1/2 py-2 hover:bg-white/[0.5]"
              href="/compare"
              onClick={() => setNavOpen(false)}
            >
              Compare
            </Link>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
