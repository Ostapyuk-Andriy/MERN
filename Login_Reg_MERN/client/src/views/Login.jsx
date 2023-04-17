import React, {useState} from 'react'
import axios from "axios"
// import video from '../videos/video.mp4'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email:"",
        password:"",
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
        axios.post(`http://localhost:8000/api/login`, user)
            .then(res=>{
                console.log(res)
                navigate("/users")})
            .catch(err => console.log(err.response))
    }


    return (
        <div className="login">
            <section className="text-center text-lg-start">
            <div className="card mb-3">
                <div className="row g-0 d-flex align-items-center">
                    {/* <div className="col-lg-4 d-none d-lg-flex">
                        <video src={video} autoPlay muted loop className="w-75 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" alt="" type="video/mp4"></video>
                    </div> */}
                    <div classname="form">
                        <div className="card-body py-5 px-md-5">
                            <form onSubmit={submitHandler}>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" value={user.email} onChange={changeHandler}/>
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Password</label>
                                    <input className="form-control" type="password" name="password" value={user.password} onChange={changeHandler} />
                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <Link to={"/register"}>Don't have an account?</Link>
                                    </div>
                                </div>
                                <button value="Login" type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Login