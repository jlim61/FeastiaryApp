import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDDCg67ogf3W6JD9UeaJUn27631PwrhD60",
  authDomain: "feastiary-5416c.firebaseapp.com",
  projectId: "feastiary-5416c",
  storageBucket: "feastiary-5416c.firebasestorage.app",
  messagingSenderId: "1016906207126",
  appId: "1:1016906207126:web:81e7d8f6fba8d4c47597b7"
};

// Initialize Firebase App once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let auth;
// Initialize auth once, and reuse it
if (!global._firebaseAuth) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  global._firebaseAuth = auth; // Store in global to avoid re-initialization on reloads
} else {
  auth = global._firebaseAuth;
}

const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
