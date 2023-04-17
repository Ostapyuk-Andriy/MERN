import React, {useState} from 'react'
import axios from "axios"

const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((responce) => {
            console.log("This is my get reqiest data:", responce.data.results)
            setPokemon(responce.data.results)
        })
        .catch((err) => {
            console.log("This  is my catch error:", err)
        })
        console.log("This is asynchronous code")
    }

    return (
        <div>
            <h1>AxiosPokemon</h1>
            <button onClick={fetchData}>Fetch Pokemon</button>
            <hr/>
            {
                pokemon.map((poke, index) =>{
                    return(
                    <div key={index}>
                        <p>{poke.name}</p>
                    </div>
                    )
                })
            }

        </div>
    )
}

export default AxiosPokemon