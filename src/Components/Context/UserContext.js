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

  const forgotPassword = (auth, email, password) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUser,
    user,
    signIn,
    forgotPassword,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
