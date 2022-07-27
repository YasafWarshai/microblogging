import React from "react";
import { useState } from "react";

export default function Profile({ setUserInfo }) {
  const localName = localStorage.getItem("twitter-username");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    localStorage.setItem("twitter-username", e.target.value);
    setInput(e.target.value);
  };
  const handleUserNameInput = () => {
    setInput(localName);
    setUserInfo(localName);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <textarea
        className="userNameInput"
        value={localName}
        onChange={handleChange}
      >
        {input}
      </textarea>
      <div className="saveButtonContainer">
        <button
          className=" saveUser btn btn-primary"
          onClick={handleUserNameInput}
        >
          Save
        </button>
      </div>
    </div>
  );
}
