import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const author = {name}
        console.log("This is my handle submit",author)
        axios.post("http://localhost:8000/api/authors/new", author)
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
                <label>Author</label>
                <input type='text' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>Add Author</button> | <button className='btn btn-outline-dark'><Link to='/'>Cancel</Link></button>
            </div>
        </form>
        </div>
    )
}

export default Create