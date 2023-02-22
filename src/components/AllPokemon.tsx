import CardNoStats from './cards/CardNoStats'

export default function AllPokemon({ pokemon }: any) {
  return pokemon.map((poke: Pokemon, index: number) => (
    <CardNoStats index={index} key={index} pokemon={poke} />
  ))
}

type Pokemon = {
  name: string
  url: string
}
