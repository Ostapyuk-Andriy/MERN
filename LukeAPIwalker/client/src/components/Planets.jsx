import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Planets = () => {
    const [planet, setPlanet] = useState("");

    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {console.log(response.data);
        setPlanet(response.data)
        })
        .catch((err) => {
            setPlanet({error: "These are not the droids you are looking for"});
        })
    }, [id])
    return (
        <div>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planets