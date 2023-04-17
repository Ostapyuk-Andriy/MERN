import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

const Edit = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [tips, setTips] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([]);

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plant/${id}`)
        .then((res) => {
            console.log("This is our update get request:", res.data)
            const plant = res.data
            setName(plant.name)
            setImage(plant.image)
            setTips(plant.tips)
            setDescription(plant.description)
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })            
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const plantObj = {name, image, tips, description}
        axios.put(`http://localhost:8000/api/plant/${id}`, plantObj)
        .then((res) => {
            console.log(res)
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

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/plant/${id}`)
        .then((res) => {
            console.log("Deleting this plant:", id)
            navigate('/')
        })
        .catch(err => console.log("This is our handleDelete catch error:", err))
    }
    return (
        <div>
            <div>
                <h1>Plant</h1>
                <Link class='btn btn-outline-dark' to='/'>go back home</Link>
            </div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Plant Image</label>
                    <input class="form-control" type='text' value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Tips</label>
                    <input class="form-control" type='text' value={tips} onChange={(e) => setTips(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <button class="btn btn-primary mb-2" type='submit'>Update Plant</button> | <button className='btn btn-danger'  onClick={(e) => {handleDelete(e, id)}}>Delete Plant</button>
                </div>
            </form>
        </div>
    )
}

export default Edit