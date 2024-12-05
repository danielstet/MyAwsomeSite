import React from 'react'
import "./LoginWithGoogle.css"

import {  useDispatch } from 'react-redux';
import { loginUserWithGoogle  } from '../../firebase/authThunks'

const LoginWithGoogle = () => {
  const dispatch = useDispatch();


  return (
    <button id='googleButton' onClick={() => {
      // @ts-ignore
      dispatch(loginUserWithGoogle());
    }}>Login with Google</button>
  )
}

export default LoginWithGoogle