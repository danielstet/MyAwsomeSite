import React from 'react'
import './login.css'


const  LoginForm = () => {
  return (
    <form id='LoginForm' onSubmit={(e) => {
        console.log("Login Submited:", e);
    }}>
        <label htmlFor="emailInput" id='loginLabel'></label>
        <input type="email" id='emailInput'/>

        <label htmlFor="passwordInput" id='loginLabel'></label>
        <input type="password" id='passwordInput'/>

        <button>Login</button>
    </form>
  )
}

export default LoginForm 