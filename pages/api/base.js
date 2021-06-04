import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCpYtEUnMbZ_mBxUU30DyoH10p6wfX1LSk",
  authDomain: "gwom-backoffice.firebaseapp.com",
  projectId: "gwom-backoffice",
  storageBucket: "gwom-backoffice.appspot.com",
  messagingSenderId: "89450625750",
  appId: "1:89450625750:web:3cdceab2e2b0499d972777"
};


const base = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export default base;