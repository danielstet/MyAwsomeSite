import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
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
			throw new Error(error.code || 'Unknown error occurred'); // Include Firebase error code
		} finally {
			dispatch(setLoading(false));
		}
	}
);

export const createUser = createAsyncThunk(
	'auth/createUser',
	async ({email, password}, {dispatch}) => {
		const auth = getAuth();
		dispatch(setLoading(true))
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const { uid } = userCredential.user;
			dispatch(setUser({ email, uid }));
		} catch (error) {
			console.error('Register Error:', error);
			throw new Error(error.code || 'Unknown error occurred'); // Include Firebase error code
		} finally {
			dispatch(setLoading(false));
		}
	}
)

export const loginUserWithGoogle = createAsyncThunk(
	'auth/loginUserWithGoogle',
	async (_, { dispatch }) => {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({ display: 'popup' });
		dispatch(setLoading(true));
		try {
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			if (!credential) {
				throw new Error('Failed to retrieve credentials from result.');
			}
			const token = credential.accessToken;
			const { uid, email } = result.user; // Directly from `result.user`

			dispatch(setUser({ email, uid }));
		} catch (error) {
			console.error('Google Login Error:', error);
			if (error.code === 'auth/popup-closed-by-user') {
				console.warn('User closed the popup before completing login.');
			} else {
				throw error; // Rethrow for further handling in the UI
			}
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
