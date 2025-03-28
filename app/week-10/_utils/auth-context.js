"use client";
 
import { useContext, createContext, useState, useEffect } from "react";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
// onAuthStateChanged going from login to logout or logout to login

import { auth } from "./firebase";
// auth is from the firebase.js file

const AuthContext = createContext();
// creating global variables 
 
export const AuthContextProvider = ({ children }) => {
    // AuthContextProvider is a component that keeps track of the user
  const [user, setUser] = useState(null);
 

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
 // auth is from the firebase.js file


  const firebaseSignOut = () => {
    return signOut(auth);
  };
// auth is from the firebase.js file

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // if the user is logged in, the currentUser will be the user object
      // if the user is logged out, the currentUser will be null
    });
    return () => unsubscribe();
    // if useEffect has a return, it will only be run if the component is unmounted (removed from the DOM)
    // used to close the connection to the database when the user logs out
  }, [user]);
 
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};
// useUserAuth is a custom hook that returns the user object so useContext 
// doesn't need to be called in every component that needs the user object