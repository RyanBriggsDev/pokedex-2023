// @ts-nocheck

import Header from '@/components/Header'
import Container from '@/components/Container'
import Form from '@/components/forms/Form'
import CardNoStats from '@/components/cards/CardNoStats'
import { useState, useEffect } from 'react'

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

          {searchTerm &&
            allPokemon.map((poke, index) => (
              <CardNoStats key={index} pokemon={poke}></CardNoStats>
            ))}
          {searchTerm && allPokemon.length === 0 && (
            <h3>No Pokémon matches your search term.</h3>
          )}

          {!loading &&
            !err &&
            !searchTerm &&
            pokemon &&
            pokemon.results.map((poke, index) => (
              <CardNoStats key={index} pokemon={poke}></CardNoStats>
            ))}
        </Container>
      </main>
    </>
  )
}
