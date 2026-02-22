import React, { useState } from 'react'
import axiosInstance from '../axiosInstance'
import axios from 'axios'
const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [wait, setWait] = useState(false)

    const handleRegistration = async (e) => {
        e.preventDefault()
        setWait(true)

        const userData = {
            username, email, password
        }

        try {
            // const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)


            const response = await axiosInstance.post('/register/',userData);
            setSuccess(true)
            setErrors({})
        } catch (error) {
            setErrors(error.response.data)
        } finally {
            setWait(false)
        }
    }
    return (
        <>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Register</h3>
                        <form onSubmit={handleRegistration}>
                            <small> {errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                            <input type="text" name="" id="" value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control mb-3" placeholder='Username' />
                            <small> {errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                            <input type="email" name="" id="" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control mb-3" placeholder='Email address' />
                            <small> {errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                            <input type="password" name="" id="" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control mb-4" placeholder='Set password' />

                            {success && <div className='alert alert-success'>Registration Successful!</div>}
                            {wait ? (
                                <button type="submit" className='btn btn-info d-block mx-auto mt-3' disabled>Please wait...</button>
                            ) : (
                                <button type="submit" className='btn btn-outline-info d-block mx-auto mt-3'>Register</button>

                            )}

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register