import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
      setPokemon(data.results)
    })
}, [])

  return (
    <div>
      <h1>NYC Pokédex</h1>
      <p>Catch Pokémon in New York City!</p>
      {pokemon.map((poke) => (
  <h3 key={poke.name}>{poke.name}</h3>
))}
    </div>
  )
}

export default App