import Head from 'next/head'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Form from '@/components/forms/Form'

import { useRouter, NextRouter } from 'next/router'
import { useState } from 'react'
import PokemonCard from '@/components/cards/PokemonCard'
import { SinglePokemon } from '@/components/lib/types'

export default function Home() {
  const [searchTermOne, setSearchTermOne] = useState<string>('')
  const [searchTermTwo, setSearchTermTwo] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [pokemonOne, setPokemonOne] = useState<SinglePokemon>()
  const [pokemonTwo, setPokemonTwo] = useState<SinglePokemon>()
  const [err, setErr] = useState<boolean>(false)

  const router: NextRouter = useRouter()

  const fetchData = async (searchTerm: string) => {
    try {
      setLoading(true)
      setErr(false)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      if (!res.ok) {
        setErr(true)
        setLoading(false)
        return
      } else {
        const jsonData = await res.json()
        if (searchTerm === searchTermOne) setPokemonOne(jsonData)
        if (searchTerm === searchTermTwo) setPokemonTwo(jsonData)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        p={`Pick your favourite Pokémon and compare stats.`}
        buttonText={`Or Check em’ All Out`}
        handleClick={() => router.push('/all')}
      />
      <main className="flex flex-col items-center">
        <Container className="gap-3 my-6">
          <Form
            button={true}
            handleSubmit={(e: any) => {
              e.preventDefault()
              if (searchTermOne) {
                fetchData(searchTermOne)
              } else alert('Please fill in the form')
            }}
            handleChange={(e) => setSearchTermOne(e.target.value.toLowerCase())}
            label="Search for your first Pokémon"
          />

          {pokemonOne && <PokemonCard pokemon={pokemonOne} />}

          {pokemonOne && (
            <Form
              button={true}
              handleSubmit={(e) => {
                e.preventDefault()
                if (searchTermTwo) {
                  fetchData(searchTermTwo)
                } else alert('Please fill in the form')
              }}
              label="Search for another Pokémon to compare"
              handleChange={(e) =>
                setSearchTermTwo(e.target.value.toLowerCase())
              }
            />
          )}
          {pokemonTwo && <PokemonCard pokemon={pokemonTwo} />}
          {err && <h3>Error. Please try again.</h3>}
          {loading && <h3>Loading...</h3>}
        </Container>
      </main>
    </>
  )
}
