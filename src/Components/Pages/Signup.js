import React, { useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  getAuth,
  getRedirectResult,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential
} from "firebase/auth";
import UserContext from "../UserContext";
import { setDoc } from "firebase/firestore";

export default function Signup() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toggleAuth, authStatus, userId, setUserId, setUserReference, setUserName, setEmail, email } =
    useContext(UserContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const provider = new GoogleAuthProvider();
  const db = getFirestore();
  const collectionReference = collection(db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  const updateUserName = (props) => {
    setUserName(props);
  };


  const handleLogin = async (e) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        window.alert(error.message);
      })
      .then(
        (userCredential) => {
       const user = userCredential.user;
       setUserReference(user.uid, {
        email: user.email,
        userName: user.email
       })
       toggleAuth()
       console.log(toggleAuth)
       console.log(authStatus)
       navigate('/')
        });
   
      };
  

  return (
    <div className="login-form">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          required
          className="emailInput"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          required
          type={"password"}
          className="emailInput"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          placeholder="Username"
          required
          className="emailInput"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button className="btn btn-primary" type={"submit"}>
          Sign Up
        </button>
      </form>
      <div className="googleHolder">
        <button
          className="btn btn-secondary googleButton"
          onClick={() => navigate("/Login")}
        >
          Login with existing account
        </button>
       
      </div>
    </div>
  );
}
