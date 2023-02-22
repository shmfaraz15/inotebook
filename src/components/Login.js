import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const submitHandler = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/api/auth/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }) // body data type must match "Content-Type" header
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
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
            </form>
        </div>
    )
}
