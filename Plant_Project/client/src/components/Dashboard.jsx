import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [plantList, setPlantList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/plants')
        .then((bucket) => {
            console.log('This is my get bucket:', bucket.data)
            setPlantList(bucket.data)
        })
        .catch((error) => {console.log('This is our catch error: ', error)})
    }, [loaded])

    return (
        <div>
            <div>
                <h1>Plant Wall</h1>
                <Link to={'/create'} class='btn btn-outline-dark'>Add a Plant</Link>
            </div>
                {
                    plantList.map((glove, i) => {
                        return(
                            <div key={i}>
                                <h2 class="">{glove.name}</h2>
                                <div class="">
                                    <Link to={`/plant/${glove._id}`}> <img class="button glow-button" src={glove.image} alt="image" /> </Link>
                                </div>
                                    <Link class="btn btn-success" to={`/update/${glove._id}`}>Edit</Link>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Dashboard