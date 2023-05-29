import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCGsRzc0u8sATNgNWJB21ciZOf6fXJfe7Q",
  authDomain: "cms-ticket-sale-aac70.firebaseapp.com",
  projectId: "cms-ticket-sale-aac70",
  storageBucket: "cms-ticket-sale-aac70.appspot.com",
  messagingSenderId: "308296786359",
  appId: "1:308296786359:web:e27c3561de9cf0503fc832",
  measurementId: "G-6N5K7LDYWB"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.ts');
  } else {
    return config;
  }
}
const app = initializeApp(getFirebaseConfig());
export const db = getFirestore(app);
export const storage = getStorage(app);


//
