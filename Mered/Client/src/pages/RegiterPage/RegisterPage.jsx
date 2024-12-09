import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'
import LoginWithGoogle from '../../components/GoogleButtons/LoginWithGoogle'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
  return (
    <div id='RegisterPage'>
        <p id='h'>Register</p>
        <RegisterForm />
        <div id='LoginLink'>
          <p>Have an account? <Link to="/login"><b>sign in</b></Link></p>
          <p id='Or'>or</p>
        </div>
        <LoginWithGoogle />
    </div>
  )
}

export default RegisterPage