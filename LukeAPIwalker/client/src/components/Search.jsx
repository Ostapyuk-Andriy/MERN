import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate} from "react-router-dom";

const Search = () => {
    const [searchInfo, setSearchInfo] = useState("p");
    
    const [query, setQuery] = useState([]);
    const [id, setId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/`)
        .then(response => {
            setQuery(Object.keys(response.data))
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${searchInfo}/${id}`);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Search For:</label>
                    <select className='search-box' defaultValue="" value={searchInfo} onChange={e => setSearchInfo(e.target.value)}>
                        {
                            query.map((q,i) => {
                                return (
                                    <option key={i} value={q}>{q}</option>
                                )
                            })
                        }
                    </select>
                    <label>ID: </label>
                    <input type="text" onChange={e => setId(e.target.value)} value={id} />
                    <button className='search-btn' type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search