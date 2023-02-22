import CardNoStats from './cards/CardNoStats'

export default function AllPokemon({ pokemon }: any) {
  return pokemon.map((poke: any, index: any) => (
    <CardNoStats index={index} key={index} pokemon={poke} />
  ))
}
