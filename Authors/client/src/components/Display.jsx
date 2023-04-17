import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = () => {
    const [authorList, setAuthorList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((bucket) => {
            console.log('This is my get bucket:', bucket.data)
            setAuthorList(bucket.data)
        })
        .catch((error) => {console.log('This is our catch error: ', error)})
    }, [loaded])


    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            console.log("Deleting this author:", id)
            setLoaded(!loaded)
        })
        .catch(err => console.log("This is our handleDelete catch error:", err))
    }
    return (
        <div>
        <Link to={'/create'}>Add Author</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    authorList.sort((a,b) => {
                        if(a.name <b.name) {return -1;}
                        if(a.name>b.name) {return 1;}
                        return 0;
                    })
                    .map((glove, i) => {
                        return(
                            <tr key={i}>
                                <td>{glove.name}</td>
                                <td>
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