import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const changeHandler =(e) =>{
        let {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, {withCredentials:true})
            .then(res=>{
                console.log(res.data);
                navigate("/login")
            })
            .catch(err => console.log("This is my register catch error: ", err))
    }


    return (
        <div className='registration'>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Firstname</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Lastname</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <button className="btn btn-outline-dark"> Register </button>
            </form>
        </div>
    )
}

export default Register