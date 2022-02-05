
import { useEffect, useState } from "react"


// const KEY = '1234'
// const q = 'coderhouse'


// query params
// const url = 'https://api.giphy.com/v1/gifs/search?api_key=1234&q=coderhouse&limit=10'
// const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${q}&limit=10`

// segment params
// const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/pikachu'

// ejemplo de POST
// fetch('https://pokeapi.co/api/v2/pokemon', {
//         method: 'POST',
//         headers: {
//             Authorization: 'TOKEN 12345'
//         },
//         body: JSON.stringify({
//             name: 'Ramiro',
//             id: 1455,
//             img: 'https://pokemon.com/ramiro.png'
//         })
//     })
//     .then((res) => console.log(res))



export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( (resp) => resp.json() )
            .then( (data) => {
                setPokemon(data)
            })
    }, [id])

    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr/>

            {pokemon && 
                <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            }

            <hr/>
            <button 
                onClick={handleAnterior} 
                className="btn btn-outline-primary mx-3"
                disabled={id === 1}
            >
                Anterior
            </button>

            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>
        </div>
    )
}