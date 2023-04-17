import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState("")
    const [top50, setTop50] = useState(true)
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const song = {title, artist, rating, top50}
        console.log("This is my handle submit",song)
        axios.post("http://localhost:8000/api/songs/new", song)
        .then((res) => {
            console.log("This is my post requestt:", res)
            navigate("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            
    }

    return (
    <div>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Artist</label>
                <input type='text' onChange={(e) => setArtist(e.target.value)}/>
            </div>
            <div>
                <label>Rating</label>
                <input type='number' onChange={(e) => setRating(e.target.value)}/>
            </div>
            <div>
                <label>Top 50</label>
                <input type='checkbox' onChange={(e) => setTop50(e.target.checked)}/>
            </div>
            <div>
                <button type='submit'>Create a Song</button> | <button className='btn btn-outline-dark'><Link to='/'>Home</Link></button>
            </div>
        </form>
    </div>
)
}

export default Create