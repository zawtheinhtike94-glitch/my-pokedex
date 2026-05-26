import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results)
        setLoading(false)
      })
  }, [])
  if (loading) {
  return <h1>Loading Pokémon...</h1>
}

  return (
    <div>
      <h1>NYC Pokédex</h1>
      <p>Catch Pokémon in New York City!</p>

      <div className="pokemon-list">
        {pokemon.map((poke, index) => (
          <div className="card" key={poke.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={poke.name}
            />

            <h3>{poke.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App