import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import { getDoc, doc, updateDoc, getFirestore } from "firebase/firestore";

export default function Profile() {
  const [tempName, setTempName] = useState("");
  const { userName, setUserName, userId, setUserId } = useContext(UserContext);
  const [input, setInput] = useState(userName);
  const navigate = useNavigate();
  const db = getFirestore();
  const collectionReference = doc(db, "users", userId);

  async function getData() {
    const docSnap = await getDoc(collectionReference);
    let userData = docSnap.data();
    setUserName(userData.userName);
    setUserId(userData.userId);
  }

  async function overWriteData(merge = true) {
    const data = {
      userName: userName,
    };
    updateDoc(collectionReference, data)
      .then((collectionReference) => {})
      .catch((error) => {
        window.alert(error.message);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setTempName(e.target.value);
    setInput(e.target.value);
  };

  const handleUserNameInput = (e) => {
    e.preventDefault();
    setUserName(tempName);
    overWriteData();
    navigate("/");
  };

  return (
    <form className="profile-container" onSubmit={handleUserNameInput}>
      <h1 className="profile-title">Username</h1>
      <textarea
        className="userNameInput"
        defaultValue={userName}
        onChange={handleChange}
      ></textarea>
      <div className="saveButtonContainer">
        <button className=" saveUser btn btn-primary" type={"submit"}>
          Save
        </button>
      </div>
    </form>
  );
}
