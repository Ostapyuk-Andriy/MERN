import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const note = {title, body}
        console.log("This is my handle submit",note)
        axios.post("http://localhost:8000/api/notes/new", note)
        .then((res) => {
            console.log("This is my post requestt:", res)
            navigate("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })            
    }

    return (
        <div>
            <div class="note">
                <h1>Write Notes</h1>
                <button className='btn btn-outline-dark'><Link to='/'>go back home</Link></button>
            </div>
            <h4>Write a new note!</h4>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Note Body</label>
                    <textarea class="form-control" rows="3" onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div>
                    <button type='submit'>Write this note</button>
                </div>
            </form>
        </div>
    )
}

export default Create