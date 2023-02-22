// @ts-nocheck
import React from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Form from '@/components/forms/Form'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CardsLoading from '@/components/CardsLoading'
const AllPokemon = dynamic(() => import('@/components/AllPokemon'), {
  loading: () => <CardsLoading />,
})

export default function All() {
  const [loading, setLoading] = useState<boolean>()
  const [searchTerm, setSearchTerm] = useState<string | null>(null)
  const [pokemon, setPokemon] = useState<string | null>(null)
  const [err, setErr] = useState<any>(null)
  const [allPokemon, setAllPokemon] = useState([])

  const fetchData = async () => {
    try {
      setLoading(true)
      setErr(null)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      if (!res.ok) {
        setErr(true)
        setLoading(false)
        return
      } else {
        const jsonData = await res.json()
        setPokemon(jsonData)

        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      setErr(error)
    }
  }

  useEffect(() => {
    const filterPokemon = () => {
      const filtered = pokemon.results.filter((pokemon) =>
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
            handleChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
          {loading && <h1>Loading...</h1>}
          {err && <h1>Error...</h1>}

          {searchTerm && (
            <AllPokemon pokemon={allPokemon} searchTerm={searchTerm} />
          )}

          {searchTerm && allPokemon.length === 0 && (
            <h3>No Pokémon matches your search term.</h3>
          )}

          {!loading && !err && !searchTerm && pokemon && (
            <AllPokemon pokemon={pokemon.results} />
          )}
        </Container>
      </main>
    </>
  )
}
