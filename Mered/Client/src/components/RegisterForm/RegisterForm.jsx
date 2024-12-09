import React, { useMemo } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../firebase/authThunks'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { validatePassword } from 'firebase/auth';
import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterForm.css'

const RegisterForm = () => {
const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const toastStyle = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    }

    const isValid = useMemo(() => {
        if (!emailIsInvalid && !passwordIsInvalid) {
            return true;
        } else {
            return false
        } }
    ,[formData])

    const dispatch = useDispatch();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim()  });
        if (name === "email") {
            if(validator.isEmail(value)) {
                // make green
                setEmailIsInvalid(false);
                setErrorMessage('')
            }
            else {
                // make red
                setEmailIsInvalid(true);
                setErrorMessage('Email is Invalid')
            }
        }
        else if (name === "password") {
            if (!validator.isStrongPassword(value)) {
                // make red
                setPasswordIsInvalid(true);
                setErrorMessage('Password must contain between 6-12 characters, uppercase letter, lowercase letter and a special sign')
            }
            else {
                // make green
                setPasswordIsInvalid(false);
                setErrorMessage('')
            }
        } else { 
            if (formData.password !== formData.confirmPassword) {
                // make red
                setPasswordIsInvalid(true);
                setErrorMessage('Password and confirm Password must be the same')
            } else {
                // make green
                setPasswordIsInvalid(false);
                setErrorMessage('')
            }
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // @ts-ignore
            const resultAction = await dispatch(createUser(formData));
            if (createUser.rejected.match(resultAction)) {
                const errorCode = resultAction.error.message; // Firebase error code
                console.error('Login error code:', errorCode);
                switch (errorCode) {
                    case "auth/email-already-in-use":
                        // @ts-ignore
                        toast.error('This email is already in use. Please use a different email or log in.', toastStyle);
                        setEmailIsInvalid(true);
                        setErrorMessage('This email is already in use')
                        break;
                    case "auth/invalid-email":
                        // @ts-ignore
                        toast.error('Invalid email format. Please enter a valid email address.', toastStyle);
                        setEmailIsInvalid(true);
                        setErrorMessage('Invalid email format. Please enter a valid email address.')
                        break;
                    case "auth/weak-password":
                        // @ts-ignore
                        toast.error('Weak password. Please choose a password with at least 6 characters.', toastStyle);
                        setPasswordIsInvalid(true)
                        setErrorMessage('Password must contain between 6-12 characters, uppercase letter, lowercase letter and a special sign')
                        break;
                    case "auth/operation-not-allowed":
                        // @ts-ignore
                        toast.error('Email/password sign-up is not enabled. Please contact support.', toastStyle);
                        break;
                    case "auth/network-request-failed":
                        // @ts-ignore
                        toast.error('Network error. Please check your internet connection and try again.', toastStyle);
                        break;
                    case "auth/too-many-requests":
                        // @ts-ignore
                        toast.error('Too many requests. Please wait and try again later.', toastStyle);
                        break;
                    default:
                        // @ts-ignore
                        toast.error('An unexpected error occurred', toastStyle);
                        console.log("An unexpected error occurred: " + errorMessage);
                        break;
                    }
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} id='RegisterForm'>
            <label id='emailLabel'>Enter your email:</label>
            <input type="email"
            id="emailInput"
            name="email"
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            className={`input ${emailIsInvalid ? 'invalid' : ''}`}
            required />

            <label id='passwordLabel'>Enter your password:</label>
            <input type={showPassword ? 'text' : 'password'}
            id="passwordInput"
            name="password"
            value={formData.password}
            autoComplete='new-password'
            onChange={handleChange}
            className={`input ${passwordIsInvalid ? 'invalid' : ''}`}
            required />

            <label id='passwordLabel'>Confirm your password:</label>
            <input type={showPassword ? 'text' : 'password'}
            id="passwordInput"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`input ${passwordIsInvalid ? 'invalid' : ''}`}
            required />
            { errorMessage && <p id='errorMessage'>{errorMessage}</p> }
            <button type='submit' disabled={!isValid}>Sign-up</button>
        </form>
        <ToastContainer 
        position="bottom-right" 
        autoClose={5000} 
        hideProgressBar={true} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        />
    </div>
  )
}

export default RegisterForm