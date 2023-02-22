import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import capitalise from '@/components/lib/capitalise'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Card from '@/components/cards/Card'
import Image from 'next/image'

export default function Index() {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState<boolean>()
  const [pokemon, setPokemon] = useState<any>(null)
  const [err, setErr] = useState<any>(null)
  const [moves, setMoves] = useState<any>(null)

  const divAlignClass =
    'flex flex-wrap w-full gap-2 place-content-around [&>*]:px-4 &>*]:text-md &>*]:text-left &>*]:md:text-center'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setErr(null)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!res.ok) {
          setErr(true)
          setLoading(false)
          return
        } else {
          const jsonData = await res.json()
          setPokemon(jsonData)
          console.log(moves)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        setErr(error)
      }
    }
    if (id) fetchData()
  }, [id])

  if (loading) return <h1>Loading...</h1>
  if (err) return <h1>{`Error. Looks like that pokémon doesn't exist!`}</h1>

  if (pokemon) {
    return (
      <>
        <Header>
          <h1 className="text-3xl">{`${capitalise(pokemon.name)} | #${pokemon.id
            .toString()
            .padStart(3, '0')}`}</h1>
        </Header>
        <main className="flex flex-col items-center h-full justify-center">
          <Container className="gap-3 my-6">
            <Card>
              <div className="flex flex-wrap w-full gap-2 place-content-around">
                <Image
                  src={pokemon.sprites.front_default}
                  width={200}
                  height={150}
                  alt={`An image of the pokemon ${pokemon.name}`}
                  className={'hover:scale-150 duration-300 ease-in-out'}
                />
                {pokemon.sprites.back_default && (
                  <Image
                    src={pokemon.sprites.back_default}
                    width={200}
                    height={150}
                    alt={`An image of the pokemon ${pokemon.name}`}
                    className={'hover:scale-150 duration-300 ease-in-out'}
                  />
                )}
              </div>
            </Card>
            <div className="w-full flex flex-col lg:flex-row gap-3">
              <Card className="gap-3">
                <h3 className="font-semibold text-2xl">Details</h3>
                <div className={divAlignClass}>
                  <p>
                    <span className="font-semibold">Weight: </span>
                    {pokemon.weight}
                  </p>
                  <p>
                    <span className="font-semibold">Height: </span>
                    {pokemon.height}
                  </p>
                </div>
              </Card>

              <Card className="gap-3">
                <h3 className="font-semibold text-2xl">Stats</h3>
                <div className={divAlignClass}>
                  <p>
                    <span className="font-semibold">HP: </span>
                    {pokemon.stats[5].base_stat}
                  </p>
                  <p>
                    <span className="font-semibold">Speed: </span>
                    {pokemon.stats[5].base_stat}
                  </p>
                  <p>
                    <span className="font-semibold">Attack: </span>
                    {pokemon.stats[1].base_stat}
                  </p>
                  <p>
                    <span className="font-semibold">Defence: </span>
                    {pokemon.stats[2].base_stat}
                  </p>
                </div>
              </Card>
            </div>

            <Card className="gap-3">
              <h3 className="font-semibold text-2xl">Moves</h3>
              <div className={divAlignClass}>
                <p>
                  {capitalise(pokemon.moves[0].move.name).replace('-', ' ')}
                </p>
                <p>
                  {capitalise(pokemon.moves[1].move.name).replace('-', ' ')}
                </p>
                <p>
                  {capitalise(pokemon.moves[2].move.name).replace('-', ' ')}
                </p>
                <p>
                  {capitalise(pokemon.moves[3].move.name).replace('-', ' ')}
                </p>
                <p>
                  {capitalise(pokemon.moves[4].move.name).replace('-', ' ')}
                </p>
                <p>
                  {capitalise(pokemon.moves[5].move.name).replace('-', ' ')}
                </p>
              </div>
            </Card>

            <Card className="gap-3">
              <h3 className="font-semibold text-2xl">Types</h3>
              <div className={divAlignClass}>
                <p>{capitalise(pokemon.types[0].type.name)}</p>
                <p>{capitalise(pokemon.types[1].type.name)}</p>
              </div>
            </Card>
          </Container>
        </main>
      </>
    )
  }
}
