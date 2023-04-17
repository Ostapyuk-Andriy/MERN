import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const Details = () => {
    const [song, setSong] = useState("")
    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/song/${id}`)
        .then((res) => {
            console.log("This is our details get request:", res.data)
            setSong(res.data)
        })
        .catch(err => console.log("This is our details get error:", err))
    }, [id])
    return (
    <div>
        <h1>{song.artist}</h1>
        <h3>{song.title}</h3>
        <h4>{song.rating}</h4>
        <h5>Top 50: {song.top50 ? "Yes" : "No"}</h5>
        <button className='btn btn-outline-dark'><Link to='/'>Home</Link></button>
    </div>
)
}

export default Details