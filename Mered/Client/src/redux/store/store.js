import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../firebase/authSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	devTools:
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
