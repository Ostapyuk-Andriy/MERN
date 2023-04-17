import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [noteList, setNoteList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/notes')
        .then((bucket) => {
            console.log('This is my get bucket:', bucket.data)
            setNoteList(bucket.data)
        })
        .catch((error) => {console.log('This is our catch error: ', error)})
    }, [loaded])

    return (
        <div>
            <div class="note">
                <h1>Note Wall</h1>
                <button className='btn btn-light'><Link to={'/create'}>Write note</Link></button>
            </div>
            <h4>Leave a note</h4>
                {
                    noteList.map((glove, i) => {
                        return(
                            <div key={i}>
                                <h2>{glove.title}</h2>
                                <div class="note">
                                    <p>{glove.body}</p>
                                    <Link to={`/update/${glove._id}`}>Edit</Link>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Dashboard