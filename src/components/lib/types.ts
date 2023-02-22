export type Pokemon = {
  name: string
  url: string
}

export type SinglePokemon = {
  abilities: []
  base_experience: number
  forms: []
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_types: []
  species: Pokemon
  sprites: any
  stats: any[]
  types: any[]
  weight: number
}

export type PokemonResponse = {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}
