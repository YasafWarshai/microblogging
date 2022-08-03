import React, { useState } from "react";
import tweetContext from "./TweetContext";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function InputForm({ apiUrl }) {
  const {text, setText} = useContext(tweetContext);
  const db = getFirestore()
  const collectionReference = collection(db, 'tweets')
  

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    addDoc(collectionReference, {
      userName: localStorage.getItem("twitter-username"),
      text: text,
      date: new Date().toISOString(),
    })
      .catch(function (error) {
        window.alert(`${error}, please try again in a minute`);
      })
      .then(() => {
        setText("");
      });
  };

  return (
    <div className="inputContainer">
      <form className="inputBox d-flex flex-row">
        <textarea
          required
          onChange={handleText}
          onKeyDown={handleKeyPress}
          className="inputForm"
          value={text}
          placeholder="What do you have in mind..."
        ></textarea>
      </form>
      <div className="btnContainer  d-flex space-between">
        <span className={`warning ${text.length < 140 ? "invisible" : ""}`}>
          The tweet can't contain more than 140 chars.
        </span>
        <button
          disabled={!text || text.length > 140}
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
