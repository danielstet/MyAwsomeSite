import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import { setUser, setLoading } from './authSlice';
import store from '../redux/store/store';

export const initializeAuthListener = () => {
	const auth = getAuth(app);
	store.dispatch(setLoading(true)); // Set loading to true initially
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// Only dispatch necessary serializable data
			const { email, uid } = user;
			store.dispatch(setUser({ email, uid }));
		} else {
			store.dispatch(setUser({})); // User is logged out, dispatch {}
		}
		store.dispatch(setLoading(false)); // Set loading to false after state updates
	});
};
