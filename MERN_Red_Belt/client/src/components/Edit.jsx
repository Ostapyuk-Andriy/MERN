import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

const Edit = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${id}`)
        .then((res) => {
            console.log("This is our update get request:", res.data)
            const note = res.data
            setTitle(note.title)
            setBody(note.body)
        })
        .catch(err => console.log("This is our update get error:", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const noteObj = {title, body}
        axios.put(`http://localhost:8000/api/note/${id}`, noteObj)
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log("This is my update page error:", err))
    }

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/note/${id}`)
        .then((res) => {
            console.log("Deleting this note:", id)
            navigate('/')
        })
        .catch(err => console.log("This is our handleDelete catch error:", err))
    }
    return (
        <div>
            <div class="note">
                <h1>Note</h1>
                <button className='btn btn-outline-dark'><Link to='/'>go back home</Link></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label>Note Body</label>
                    <textarea class="form-control" rows="3" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div>
                    <p><button type='submit'>Edit Note</button> | <button className='btn btn-danger'  onClick={(e) => {handleDelete(e, id)}}>Delete Note</button></p>
                </div>
            </form>
        </div>
    )
}

export default Edit