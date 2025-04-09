
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your Firebase configuration
const firebaseConfig = {
    authDomain: 'hau-facebook.firebaseapp.com',
    projectId: 'hau-facebook',
    storageBucket: 'hau-facebook.firebasestorage.app',
    messagingSenderId: '346298572774',
    appId: '1:346298572774:web:3ca4865a454041d2720027',
    measurementId: 'G-623B3LFVBQ',
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = getAuth(app); // This initializes Firebase Authentication


const provider = new GoogleAuthProvider(); // Google Auth provider to sign in


export { auth, provider, signInWithPopup, db };
