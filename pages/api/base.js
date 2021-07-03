import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSEGING_SENDER_ID,
  appId: process.env.APP_ID
};

const base = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export default base;