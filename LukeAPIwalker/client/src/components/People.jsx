import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const People = () => {
    const [person, setPerson] = useState("");

    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {console.log(response.data);
        setPerson(response.data)
        })
        .catch((err) => {
            setPerson({error: "These are not the droids you are looking for"});
        })
    }, [id])
    return (
        <div>
            <h2>{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    )
}

export default People