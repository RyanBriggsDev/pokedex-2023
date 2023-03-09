import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Form from '@/components/forms/Form'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { useRouter, NextRouter } from 'next/router'

const AllPokemon = dynamic(() => import('@/components/AllPokemon'), {
  loading: () => <Loading />,
})

export default function All() {
  const router: NextRouter = useRouter()
  const [loading, setLoading] = useState<boolean>()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [pokemon, setPokemon] = useState<any>([])
  const [err, setErr] = useState<boolean>(false)
  const [allPokemon, setAllPokemon] = useState<any>([])

  const fetchData = async () => {
    try {
      setLoading(true)
      setErr(false)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      if (!res.ok) {
        setErr(true)
        setLoading(false)
        return
      } else {
        const jsonData = await res.json()
        setPokemon(jsonData.results)
        setLoading(false)
      }
    } catch (error) {
      setErr(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    const filterPokemon = () => {
      const filtered = pokemon?.filter((pokemon: any) =>
        pokemon.name.includes(searchTerm?.toLowerCase())
      )
      setAllPokemon(filtered)
    }
    if (pokemon) filterPokemon()
  }, [searchTerm, pokemon])

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (err)
    return <Error text="Oh no. Somethings gone wrong. Please try again" />

  return (
    <>
      <Head>
        <title>Pokédex 2023 | View All & Search</title>
      </Head>
      <Header
        p="View All 151 Original Pokémon or Filter by Type or Min HP"
        buttonText="Or Compare Your Favourites"
        handleClick={() => router.push('/compare')}
      />
      <main className="flex flex-col items-center">
        <Container className="gap-3 my-6">
          <Form
            label="Or search for your favourite original"
            handleChange={(e: any) => {
              setSearchTerm(e.target.value)
            }}
          />
          {loading && <h1>Loading...</h1>}
          {err && (
            <Error text="Oh no. Somethings gone wrong. Please try again" />
          )}

          {searchTerm && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 w-full gap-4">
              <AllPokemon pokemon={allPokemon} />
            </div>
          )}

          {searchTerm && allPokemon.length === 0 && (
            <Error text={`Looks like no Pokémon match your search term.`} />
          )}

          {!loading && !err && !searchTerm && pokemon && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 w-full gap-4">
              <AllPokemon pokemon={pokemon} />
            </div>
          )}
        </Container>
      </main>
    </>
  )
}
