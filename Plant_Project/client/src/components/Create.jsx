import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [tips, setTips] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const plant = {name, image, tips, description}
        console.log("This is my handle submit",plant)
        axios.post("http://localhost:8000/api/plants/new", plant)
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
            <div>
                <h1>Add a Plant</h1>
                <Link class='btn btn-outline-dark' to='/'>go back home</Link>
            </div>
            <h4>Create a new Plant</h4>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" type='text' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Plant Image (URL Format)</label>
                    <input class="form-control" type='text' onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Tips</label>
                    <input class="form-control" type='text' onChange={(e) => setTips(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <button class="btn btn-primary mb-2" type='submit'>Add this Plant</button>
                </div>
            </form>
        </div>
    )
}

export default Create