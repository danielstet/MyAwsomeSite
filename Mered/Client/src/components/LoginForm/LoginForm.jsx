import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../../firebase/authThunks'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.css';

/**
 * @typedef {Object} LoginCredentials
 * @property {string} email
 * @property {string} password
 */

/**
 * LoginForm component for handling user authentication
 * @returns {JSX.Element} The rendered component
 */
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
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
  // redux part
  const dispatch = useDispatch();
  // @ts-ignore
  const { isLoading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim()  });
  };
  
  /**
   * Handles the form submission and dispatches the login action
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event
   */
  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Login Submitted:', formData);
  try {
    // Dispatch the loginUser thunk and await its result
    // @ts-ignore
    const resultAction = await dispatch(loginUser(formData));

    // Check if the action was rejected
    if (loginUser.rejected.match(resultAction)) {
      const errorCode = resultAction.error.message; // Firebase error code
      console.error('Login error code:', errorCode);

      if (errorCode === 'auth/invalid-credential' ) {
        console.log('Invalid login credentials');
        setIsInvalid(true);
        setErrorMessage('Invalid email or password.');
        // @ts-ignore
        toast.error('Invalid email or password.', toastStyle);
      }
      else {
        setIsInvalid(true);
        setErrorMessage('An unexpected error occurred. Please try again.');
        // @ts-ignore
        toast.error('An unexpected error occurred. Please try again.', toastStyle);
      }
    } else {
      setIsInvalid(false);
      setErrorMessage('');
      console.log('Login successful!');
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    // @ts-ignore
    toast.error('Login failed. Please check your email or password.', toastStyle);
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };



  return (
    <>
    <form id="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="emailInput" id="emailLabel">
        Email:
      </label>
      <input
        type="email"
        id="emailInput"
        name="email"
        value={formData.email}
        onChange={handleChange}
        autoComplete='email'
        className={`input ${isInvalid ? 'invalid' : ''}`}
        required
      />

      <label htmlFor="passwordInput" id="passwordLabel">
        Password:
      </label>
      <div style={{ display: 'flex', alignItems: 'center',  }}>
        <input
          type={showPassword ? 'text' : 'password'}
          id="passwordInput"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete='current-password'
          className={`input ${isInvalid ? 'invalid' : ''}`}
          required
        />
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`input ${isInvalid ? 'invalid' : ''}`}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      { errorMessage && <p id='errorMessage'>{errorMessage}</p>}
      {isLoading? <button type="submit" disabled>Login</button> : <button type="submit">Login</button>}
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
    </>
  );
};

export default LoginForm;
