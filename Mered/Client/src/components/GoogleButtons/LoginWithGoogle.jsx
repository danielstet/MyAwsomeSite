import React from 'react'
import { useState } from 'react';
import "./LoginWithGoogle.css"

import {  useDispatch } from 'react-redux';
import { loginUserWithGoogle  } from '../../firebase/authThunks'


const LoginWithGoogle = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
  if (isLoading) return;
  setIsLoading(true);
  try {
    // @ts-ignore
    await dispatch(loginUserWithGoogle());
  } finally {
    setIsLoading(false);
  }
};

  return (
    <button id='googleButton' onClick={handleGoogleLogin}>Login with Google</button>
  )
}

export default LoginWithGoogle