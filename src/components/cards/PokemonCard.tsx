import Card from './Card'
import capitalise from '../lib/capitalise'
import Image from 'next/image'

// need to update this type
export default function PokemonCard({
  pokemon,
  bg,
}: {
  pokemon: any
  bg: string
}) {
  return (
    <Card>
      <h3
        className={`w-full flex items-center justify-center p-3 text-xl rounded-t gap-3 ${
          bg === 'yellow' ? 'bg-poke-yellow' : 'bg-poke-blue text-white'
        }`}
      >
        <span className="font-semibold">{capitalise(pokemon.name)}</span>
        {`#${pokemon.id.toString().padStart(3, '0')}`}
      </h3>
      <Image
        src={pokemon.sprites.front_default}
        width={150}
        height={100}
        alt={`An image of the pokemon ${pokemon.name}`}
      />
      <div className="flex flex-col items-center justify-center w-full gap-2 p-3">
        <div className="grid grid-cols-2 gap-2 w-full text-center">
          <p>
            <span className="font-semibold">Height:</span> {pokemon.height}
          </p>
          <p>
            <span className="font-semibold">Speed: </span>
            {pokemon.stats[5].base_stat}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {pokemon.weight}
          </p>
          <p>
            <span className="font-semibold">Attack: </span>
            {pokemon.stats[1].base_stat}
          </p>
          <p>
            <span className="font-semibold">HP: </span>
            {pokemon.stats[0].base_stat}
          </p>
          <p>
            <span className="font-semibold">Defence: </span>
            {pokemon.stats[2].base_stat}
          </p>
          <p>
            <span className="font-semibold">Type: </span>
            {capitalise(pokemon.types[0].type.name)}
          </p>
          <p>
            <span className="font-semibold">Move: </span>
            {capitalise(pokemon.moves[0].move.name).replace('-', ' ')}
          </p>
        </div>
      </div>
    </Card>
  )
}
