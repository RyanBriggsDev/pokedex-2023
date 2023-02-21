import Image from 'next/image'
import Container from './Container'
import Button from './Button'
import pokemon from '@/assets/images/pokemon.jpg'
import pokedexLogo from '@/assets/images/pokedexLogo.png'

export default function Header({
  p,
  buttonText,
  buttonType,
  handleClick,
}: HeaderProps) {
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
