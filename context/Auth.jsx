import {useState, useEffect, createContext} from "react";
import base from "../pages/api/base";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    base.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider
      value={currentUser}
    >
      {children}
    </AuthContext.Provider>
  )
}