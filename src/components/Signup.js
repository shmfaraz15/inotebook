import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "", })
    const submitHandler = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/api/auth/createuser`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();//authntoken will be returned
        if (json.success) {
            //save the authtoken and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else {
            alert(json.error)
        }
        console.log(json)
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary" >SignUp</button>
            </form>
        </div>
    )
}
