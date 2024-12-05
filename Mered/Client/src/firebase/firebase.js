import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCoTujKZZkMfuwrzVmvrEYAzkEb_eRgtiU',
	authDomain: 'mered-df918.firebaseapp.com',
	projectId: 'mered-df918',
	storageBucket: 'mered-df918.firebasestorage.app',
	messagingSenderId: '899523017231',
	appId: '1:899523017231:web:cc614fbf82376561e6817a',
	measurementId: 'G-VR0JWBKPLB',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, analytics, auth}