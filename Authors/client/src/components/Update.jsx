import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

const Update = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            console.log("This is our update get request:", res.data)
            const author = res.data
            setName(author.name)
        })
        .catch(err => console.log("This is our update get error:", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const authorObj = {name}
        axios.put(`http://localhost:8000/api/author/${id}`, authorObj)
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch(err => {
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
            <form onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div>
                <label>Author</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>Update Author</button> | <button className='btn btn-outline-dark'><Link to='/'>Cancel</Link></button>
            </div>
        </form>
        </div>
    )
}

export default Update