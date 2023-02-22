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
      className="hover:bg-white/[0.5] duration-300 ease-in-out cursor-pointer"
      index={index}
      handleClick={() => router.push(`/${pokeId}`)}
    >
      <Image
        width={150}
        height={150}
        alt={`Image of ${pokemon.name}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
      />
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h3>
          <span className="font-semibold">{capitalise(pokemon.name)}</span>
          {` | #${pokeId.toString().padStart(3, '0')}`}
        </h3>
      </div>
    </Card>
  )
}
