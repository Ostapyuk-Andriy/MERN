import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const OnePlant = () => {
    const [plant, setPlant] = useState("")
    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/plant/${id}`)
        .then((res) => {
            console.log("This is our details get request:", res.data)
            setPlant(res.data)
        })
        .catch(err => console.log("This is our details get error:", err))
    }, [id])
    return (
    <div>
        <div>
            <h1>{plant.name}</h1>
            <Link class='btn btn-outline-dark' to='/'>Home</Link>
        </div>
        <img src={plant.image} alt="image" />
        <h4>{plant.tips}</h4>
        <h4>{plant.description}</h4>
    </div>
)
}

export default OnePlant