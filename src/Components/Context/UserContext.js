import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.init";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);

  const auth = getAuth(app);

  ///////////////////
  const createUser = (email, password) => {
     setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  ////////////////

  const signIn = (auth, email, password) => {
     setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const forgotPassword = (auth, email) => {
     setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoader(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  const authInfo = {
    createUser,
    user,
    signIn,
    forgotPassword,
    loader,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
