import { nanoid } from "nanoid";
import React, { useState } from "react";

export default function InputForm({ addTweet }) {
  const [text, setText] = useState("");
  const [input, setDisable] = useState("true");

  const handleText = (e) => {
    setDisable(e.target.value);

    setText(e.target.value);
  };

  const handleSubmit = () => {
    const newTweet = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleString(),
      userName: "YasafWarshai",
    };

    addTweet(newTweet);
    setText("");
  };

  return (
    <div className="inputContainer">
      <form className="inputBox d-flex flex-row">
        <textarea
          required
          onChange={handleText}
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
          tweet
        </button>
      </div>
    </div>
  );
}
