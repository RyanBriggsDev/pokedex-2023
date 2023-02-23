import Card from './Card'
import Image from 'next/image'
import capitalise from '../lib/capitalise'
import { useRouter } from 'next/router'
import type { Pokemon } from '../lib/types'

export default function CardNoStats({
  pokemon,
  index,
}: {
  pokemon: Pokemon
  index: number
}) {
  const router = useRouter()

  const getId = (url: string) => {
    const split = url.split('/')
    const id = split[6]
    return id
  }
  const pokeId = getId(pokemon.url)

  return (
    <Card
      className="hover:bg-white/[0.5] duration-300 ease-in-out cursor-pointer hover:scale-110 hover:z-0 hover:relative"
      index={index}
      handleClick={() => router.push(`/${pokeId}`)}
    >
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h3 className="rounded-t w-full flex justify-center items-center p-3 gap-3 bg-black/[0.8] text-white">
          <span className="font-semibold">{capitalise(pokemon.name)}</span>
          {`#${pokeId.toString().padStart(3, '0')}`}
        </h3>
      </div>
      <Image
        width={150}
        height={150}
        alt={`Image of ${pokemon.name}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
      />
    </Card>
  )
}
