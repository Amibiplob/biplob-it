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

  const auth = getAuth(app);

  ///////////////////
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  ////////////////

  const signIn = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const forgotPassword = (auth, email) => {
    return sendPasswordResetEmail(auth, email);
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
