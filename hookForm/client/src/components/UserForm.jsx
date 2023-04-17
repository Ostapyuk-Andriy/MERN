import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        };
    
    return (
    <div>
        <form onSubmit={createUser} className="Form">
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e) => {setfirstName(e.target.value)}} className="form-control"/>
                <p className='text-danger'>
                    {
                        firstName.length > 0 && firstName.length < 2 ? "First Name must be at least 2 characters." : ""
                    }
                </p>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => {setlastName(e.target.value)}} className="form-control"/>
                <p className='text-danger'>
                    {
                        lastName.length > 0 && lastName.length < 2 ? "Last Name must be at least 2 characters." : ""
                    }
                </p>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={(e) => {setemail(e.target.value)}} className="form-control"/>
                <p className='text-danger'>
                    {
                        email.length > 0 && email.length < 5 ? "Email must be at least 5 characters." : ""
                    }
                </p>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e) => {setpassword(e.target.value)}} className="form-control"/>
                <p className='text-danger'>
                    {
                        password.length > 0 && password.length < 8 ? "Password must be at least 8 characters." : ""
                    }
                </p>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={(e) => {setconfirmPassword(e.target.value)}} className="form-control"/>
                <p className='text-danger'>
                    {
                        confirmPassword.length > 0 && confirmPassword.length < 8 ? "Password must be at least 8 characters." : ""
                    }
                </p>
                <p className='text-danger'>
                    {
                        password !== confirmPassword ? "Passwords must match.": ""
                    }
                </p>
            </div>
        </form>
        <div className="output">
            <h2>Your Form Data</h2>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {confirmPassword}</h4>
        </div>
    </div>
    )
}

export default UserForm