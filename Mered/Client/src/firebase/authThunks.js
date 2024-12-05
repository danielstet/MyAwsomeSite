import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { setUser, setLoading, clearUser } from './authSlice';

/**
 * @typedef {Object} LoginCredentials
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 */

/**
 * Login a user with email and password.
 *
 * @type {import('@reduxjs/toolkit').AsyncThunk<void, LoginCredentials, {}>}
 */

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async ({ email, password }, { dispatch }) => {
		const auth = getAuth();
		dispatch(setLoading(true));
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log('userCredential: ', userCredential);
			const { uid } = userCredential.user;
			dispatch(setUser({ email, uid }));
		} catch (error) {
			console.error('Login Error:', error);
			throw error; // Handle this in your UI
		} finally {
			dispatch(setLoading(false));
		}
	}
);

export const loginUserWithGoogle = createAsyncThunk(
	'auth/loginUserWithGoogle',
	async (_, { dispatch }) => {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		dispatch(setLoading(true));
		try {
			const userCredential = await signInWithPopup(auth, provider);
			const { uid, email } = userCredential.user;
			dispatch(setUser({ email, uid }));
		} catch (error) {
			console.error('Google Login Error:', error);
			throw error;
		} finally {
			dispatch(setLoading(false));
		}
	}
);

export const logoutUser = createAsyncThunk(
	'auth/logoutUser',
	async (_, { dispatch }) => {
		const auth = getAuth();
		dispatch(setLoading(true));
		try {
			await signOut(auth);
			dispatch(clearUser());
		} catch (error) {
			console.error('Logout Error:', error);
			throw error; // Handle this in your UI
		} finally {
			dispatch(setLoading(false));
		}
	}
);
