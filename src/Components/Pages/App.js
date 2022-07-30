import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import tweetContext from "../TweetContext";


import "./styles.css";

import Home from "./Home";
import Profile from "./Profile";
import NavBar from "./NavBar";

const App = () => {
  const [listofTweets, setListofTweets] = useState([])
  const [text, setText] = useState("");
 
  
  
  return (
    <>
    <tweetContext.Provider value={{listofTweets, setListofTweets, text, setText}}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      </tweetContext.Provider>
    </>
  );
};

export default App;
