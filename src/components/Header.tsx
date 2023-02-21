import Image from 'next/image'
import Container from './Container'
import Button from './Button'
import pokemon from '@/assets/images/pokemon.jpg'
import pokedexLogo from '@/assets/images/pokedexLogo.png'
import { useEffect, useState } from 'react'

export default function Header({
  p,
  buttonText,
  buttonType,
  handleClick,
}: HeaderProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<null | object>(null)

  const url = 'https://pokeapi.co/api/v2/pokemon/ivysaur'

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url)
      if (!res.ok) {
        return
      } else {
        const jsonData = await res.json()
        setData(jsonData)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header
      className="min-h-[20rem] w-screen flex justify-center items-center text-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${pokemon.src})` }}
    >
      <div
        id="dark-overlay"
        className="absolute top-0 left-0 bg-black/[0.8] w-full h-full z-100"
      ></div>
      <Container>
        <div className="relative z-10 text-white flex flex-col gap-5 items-center">
          <Image src={pokedexLogo} alt="pokemon at the start of battle" />
          {p && <p className="text-md">{p}</p>}
          {buttonText && (
            <Button
              type={buttonType}
              text={`Or Check em' All Out`}
              handleClick={handleClick}
            />
          )}
        </div>
      </Container>
    </header>
  )
}

type HeaderProps = {
  p: string
  buttonText: string
  buttonType?: 'string'
  handleClick: () => void
}
