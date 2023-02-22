import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Form from '@/components/forms/Form'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const AllPokemon = dynamic(() => import('@/components/AllPokemon'), {
  loading: () => <Loading />,
})

export default function All() {
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
  if (err) return <h1>Error...</h1>

  return (
    <>
      <Header p="View All 151 Original Pokémon or Filter by Type or Min HP" />
      <main className="flex flex-col items-center">
        <Container className="gap-3 my-6">
          <Form
            label="Or search for your favourite original"
            handleChange={(e: any) => {
              setSearchTerm(e.target.value)
            }}
          />
          {loading && <h1>Loading...</h1>}
          {err && <h1>Error...</h1>}

          {searchTerm && <AllPokemon pokemon={allPokemon} />}

          {searchTerm && allPokemon.length === 0 && (
            <h3>No Pokémon matches your search term.</h3>
          )}

          {!loading && !err && !searchTerm && pokemon && (
            <AllPokemon pokemon={pokemon} />
          )}
        </Container>
      </main>
    </>
  )
}
