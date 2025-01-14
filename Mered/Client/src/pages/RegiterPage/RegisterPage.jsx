import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'
import LoginWithGoogle from '../../components/GoogleButtons/LoginWithGoogle'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo nepolny.svg"
import BackgroundGif from '../../assets/background.gif';
const RegisterPage = () => {
  return (
    <div className="register-page-wrapper">
      <img className="background-gif" src={BackgroundGif} alt="Background Animation" />
      
      <div className="register-content">
        {/* Логотип по центру */}
        <Link to="/"><img src={Logo} alt="Logo" width={240}/></Link>
        <div id="RegisterPage">
          <p id="h">Register</p>
          <RegisterForm />
          <div id="LoginLink">
            <p>
              Have an account?{' '}
              <Link to="/login">
                <b>Sign in</b>
              </Link>
            </p>
            <p id="Or">or</p>
          </div>
          {/* Кнопка «Продолжить с Google» */}
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage