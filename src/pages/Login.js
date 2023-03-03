import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useLogin } from '../hooks/useLogin'

import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <div className='login-container'>
                <div className="login-buttons-container">
                    <NavLink className='login-container-button login-button-on' exact="true" to="/login">Login</NavLink>
                    <NavLink className='login-container-button' exact="true" to="/signup">Sign Up</NavLink>
                </div>

                <h3>Login</h3>

                <label className='login-labels'>Email:</label>
                <input className='login-email-input' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <label className='login-labels'>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button disabled={isLoading}>Submit</button>
                {error && <div className='login-error'>{error}</div>}
            </div>
        </form>
    )
}

export default Login