import { initializeApp } from 'firebase/app';
import "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider, getToken  } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_FIREBASE_RECAPTCHA_API_KEY),
  isTokenAutoRefreshEnabled: true
});

getToken(appCheck).catch((err) => console.log(err));

export default firebaseApp;