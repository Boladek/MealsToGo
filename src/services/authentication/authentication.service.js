import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signUpRequest = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
