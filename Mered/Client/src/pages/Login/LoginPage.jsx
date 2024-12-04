import React from 'react'
// @ts-ignore
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginWithGoogle from '../../components/GoogleButtons/LoginWithGoogle'

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <LoginWithGoogle />
    </>
  )
}

export default LoginPage