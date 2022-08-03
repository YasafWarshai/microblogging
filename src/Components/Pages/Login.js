import React, { useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword,  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  getRedirectResult,
  signInWithPopup,
  GoogleAuthProvider,
  userCredential
} from "firebase/auth";
import UserContext from "../UserContext";
import { setDoc } from "firebase/firestore";


export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authStatus, toggleAuth, setUserReference, setUserName, setEmail, email } = useContext(UserContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const provider = new GoogleAuthProvider();
  const db = getFirestore()
  const collectionReference = collection(db, 'users')


  const handleSubmit = async (e) => {
    e.preventDefault();
   await handleLogin()

    
  }

  const updateUserName = (props) => {
    setUserName(props)
  }


  const handleLogin = async (e) => {
    await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
    window.alert(error.message)
      })
      .then((userCredential) => {
        const user = userCredential.user;
        setUserReference(user.uid, {
         email: user.email,
         userName: user.email
        })
        toggleAuth()
        console.log(toggleAuth)
        console.log(authStatus)
        navigate('/')
     })
      
      }
  

const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider) 
        .catch((error) => {
            window.alert(error.message)
        })
    .then((userCredential) => {
            const user = userCredential.user;
            setUserReference(user.uid, {
             email: user.email,
             userName: user.email
            })
toggleAuth()
console.log(toggleAuth)
            console.log(authStatus)
navigate('/')
console.log('here')
 })
}




  return (
    <div className="login-form">
      <form className='loginForm' onSubmit={handleSubmit}>
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
       <div className="googleHolder">
        <button
          className="btn btn-secondary googleButton"
          onClick={() => navigate("/Login")}
        >
          Login with existing account
        </button>
        <button
          className="btn btn-secondary googleButton"
          target={"_"}
          onClick={googleLogin}
        >
          Login with Google
        </button>
      </div>
      </form>
      </div>
  );
}
