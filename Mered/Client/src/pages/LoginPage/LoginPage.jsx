import React from 'react'
// @ts-ignore
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginWithGoogle from '../../components/GoogleButtons/LoginWithGoogle'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div id='LoginPage'>
      <LoginForm />
      <LoginWithGoogle />
      <div id='registerLink'>
        <p>don't have an account yet? </p> 
        <p><b>press here to <Link to="/register">register</Link></b></p>
      </div>
      </div>
  )
}

export default LoginPage