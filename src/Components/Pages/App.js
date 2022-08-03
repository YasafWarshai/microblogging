import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import tweetContext from "../TweetContext";
import { initializeApp } from "@firebase/app";
import {getAuth} from 'firebase/auth'
import "./styles.css";
import Home from "./Home";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Signup from "./Signup";
import UserContext from "../UserContext";
import UseUser from "../../Hooks/UseUser";
import PrivateRoute from "../PrivateRoute";
import Login from "./Login";

const App = () => {
  const [listofTweets, setListofTweets] = useState([])
  const [text, setText] = useState("");


  const firebaseConfig = {
    apiKey: "AIzaSyCyR7ij1XYUg1ygYHpxlVKN8BOft1Hlop0",
    authDomain: "itc-twitter-8ad61.firebaseapp.com",
    projectId: "itc-twitter-8ad61",
    storageBucket: "itc-twitter-8ad61.appspot.com",
    messagingSenderId: "457214479286",
    appId: "1:457214479286:web:0723f87986186a9a500f17"
  };



  initializeApp(firebaseConfig) 
const auth = getAuth()

const { userId, setUserId, toggleAuth, email, setEmail, userName, setUserReference, setUserName, authStatus, setAuthStatus } = UseUser()




  return (
    <>
    <UserContext.Provider value={{authStatus, toggleAuth, setAuthStatus, userName, setUserName, email, setEmail, userId, setUserId, auth, setUserReference}}>
    <tweetContext.Provider value={{listofTweets, setListofTweets, text, setText,}}>
      <NavBar />
      <Routes>
        <Route index element={
     <PrivateRoute>
     <Home />
     </PrivateRoute>} />
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path='/signup' element={<Signup />} /> 
        <Route exact path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />

      </Routes>
      </tweetContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
