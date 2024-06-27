// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDClTre77HigRB2qxJX6j3_qevb538KrLA",
  authDomain: "car-spare-part-d8ca6.firebaseapp.com",
  projectId: "car-spare-part-d8ca6",
  storageBucket: "car-spare-part-d8ca6.appspot.com",
  messagingSenderId: "816721139643",
  appId: "1:816721139643:web:b7506fc83ce7d5cce7569e",
  measurementId: "G-5GV4BHBW5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, ()=>{
    persistence : getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);

export const usersRef = collection(db, 'users')
