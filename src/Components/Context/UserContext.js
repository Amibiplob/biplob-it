import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
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
  //////////////////
  /////////////////
  ////////////////
  //////////////////
  /////////////////
  ////////////////
  //////////////////
  /////////////////
  ////////////////
  //////////////////
  /////////////////
  ////////////////
  //////////////////
  /////////////////
  ////////////////
  //////////////////
  /////////////////
  ////////////////
  //////////////////
  /////////////////

  //////////////////

  const authInfo = {
    createUser,
    user
  };

  ////////////////////

  ////////////////////

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  },[])

  ////////////////////

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
