// rafce
import React, {useState} from 'react'

const Form = () => {
    // State variables
    // Getters & Setters
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")
    
    const [listOfPets, setListOfPets] = useState([])


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form Submited", name, type, age, img)

        let petObj = {name, type, age, img}

        setListOfPets([...listOfPets, petObj])
    }
    return (
    <div>
        <h1>Pet Form</h1>
        <form onSubmit={submitHandler} className="Form">
            <div>
                <label>Pet Name:</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}} className="form-control"/>
            </div>
            <div>
                <label>Pet Type:</label>
                <input type="text" onChange={(e) => {setType(e.target.value)}} className="form-control"/>
            </div>
            <div>
                <label>Pet Age:</label>
                <input type="text" onChange={(e) => {setAge(e.target.value)}} className="form-control"/>
            </div>
            <div>
                <label>Pet Image:</label>
                <input type="text" onChange={(e) => {setImg(e.target.value)}} className="form-control"/>
            </div>
            <div>
                <button type="submit" className="btn btn-outline-dark">Add Pet</button>
            </div>
        </form>
        <div className="pet-list">
            {
                listOfPets.map((pet, idx) => {
                    return(
                        <div key={idx}>
                            <h1>Cat Name: {pet.name}</h1>
                            <h3>Cat Type: {pet.type}</h3>
                            <h3>Cat Age: {pet.age}</h3>
                            <img src={pet.img} alt="Pet Pic" height="150px"/>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Form