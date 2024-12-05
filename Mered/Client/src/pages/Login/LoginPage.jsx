import React from 'react'
// @ts-ignore
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginWithGoogle from '../../components/GoogleButtons/LoginWithGoogle'

import './LoginPage.css'

const LoginPage = () => {
  return (
    <div id='LoginPage'>
      <LoginForm />
      <LoginWithGoogle />
    </div>
  )
}

export default LoginPage