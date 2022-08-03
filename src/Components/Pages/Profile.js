import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";


export default function Profile() {
  const [tempName, setTempName] = useState('')
  const { userName, setUserName, setUserReference } = useContext(UserContext)
  const [input, setInput] = useState(userName);
  const [profileImage, setProfileImage] = useState()
  const navigate = useNavigate()




 

  const handleChange = (e) => {
    setTempName(e.target.value)
    setInput(e.target.value);
  };

  const handleUserNameInput = (e) => {
    e.preventDefault()
    setUserName(tempName)
    navigate('/')
  };

  return (
    <form className="profile-container" onSubmit={handleUserNameInput}>
      <h1 className="profile-title">Username</h1>
      <textarea
        className="userNameInput"
defaultValue={userName} onChange={handleChange}
      >
      </textarea>
      <div className="saveButtonContainer">
        <button
          className=" saveUser btn btn-primary"
          
          type={'submit'}
        >
          Save
        </button>
      </div>
    </form>
  );
}
