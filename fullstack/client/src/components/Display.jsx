import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = () => {
    const [songList, setSongList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/songs')
        .then((bucket) => {
            console.log('This is my get bucket:', bucket.data)
            setSongList(bucket.data)
        })
        .catch((error) => {console.log('This is our catch error: ', error)})
    }, [loaded])


    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/song/${id}`)
        .then((res) => {
            console.log("Deleting this song:", id)
            setLoaded(!loaded)
        })
        .catch(err => console.log("This is our handleDelete catch error:", err))
    }

    return (
    <div>
        <button className='btn btn-secondary'><Link to={'/create'}>Add A Song</Link></button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Titile</th>
                    <th>Artist</th>
                    <th>Rating</th>
                    <th>Top 50</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    songList.map((glove, i) => {
                        return(
                            <tr key={i}>
                                <td>{glove.title}</td>
                                <td>{glove.artist}</td>
                                <td>{glove.rating}</td>
                                {/* Condition ? "Truthy : "False" */}
                                <td>{glove.top50 ? "Yes" : "No"}</td>
                                <td><button className='btn btn-outline-warning'><Link to={`/details/${glove._id}`}>View</Link></button> | 
                                <button className='btn btn-outline-dark'><Link to={`/update/${glove._id}`}>Edit</Link></button> | 
                                <button className='btn btn-danger' onClick={(e) => {handleDelete(e, glove._id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
)
}

export default Display