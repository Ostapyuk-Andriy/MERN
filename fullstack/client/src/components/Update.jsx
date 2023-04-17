import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(5)
    const [top50, setTop50] = useState(true)

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/song/${id}`)
        .then((res) => {
            console.log("This is our update get request:", res.data)
            const song = res.data
            setTitle(song.title)
            setArtist(song.artist)
            setRating(song.rating)
            setTop50(song.top50)
        })
        .catch(err => console.log("This is our update get error:", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const songObj = {title, artist, rating, top50}
        axios.put(`http://localhost:8000/api/song/${id}`, songObj)
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log("This is my update page error:", err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Artist</label>
                    <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)}/>
                </div>
                <div>
                    <label>Rating</label>
                    <input type='number' value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <div>
                    <label>Top 50</label>
                    <input type='checkbox' checked={top50} onChange={(e) => setTop50(e.target.checked)}/>
                </div>
                <div>
                    <button type='submit'>Update a Song</button> | <button className='btn btn-outline-dark'><Link to='/'>Home</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Update