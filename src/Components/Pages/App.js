import React from "react";
import { Route, Routes } from "react-router-dom";

import "./styles.css";

import Home from "./Home";
import Profile from "./Profile";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
