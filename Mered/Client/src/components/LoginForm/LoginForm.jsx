import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../../firebase/authThunks'
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

  // redux part
  const dispatch = useDispatch();
  // @ts-ignore
  const { currentUser, isLoggedIn, isLoading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  /**
   * Handles the form submission and dispatches the login action
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Submitted:', formData);
    try {
      // @ts-ignore
      await dispatch(loginUser(formData));
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };



  return (
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
        required
      />

      <label htmlFor="passwordInput" id="passwordLabel">
        Password:
      </label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          id="passwordInput"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
            type="button"
            onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
