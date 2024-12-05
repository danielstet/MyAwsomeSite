import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: {},
	isLoggedIn: false,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action) {
			// Store only serializable data, such as uid and email
			const { uid, email } = action.payload;
			state.currentUser = { uid, email }; // Store only what you need
			state.isLoggedIn = true;
		},
		setLoading(state, action) {
			state.isLoading = action.payload;
		},
		clearUser(state) {
			state.currentUser = {};
			state.isLoggedIn = false;
		},
	},
});

export const { setUser, setLoading, clearUser } = authSlice.actions;
export default authSlice.reducer;
