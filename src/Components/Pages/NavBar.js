import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";
import { signOut, getAuth } from "firebase/auth";

export default function NavBar() {
const { userId, setAuthStatus, authStatus } = useContext(UserContext)
const auth = getAuth()
const navigate = useNavigate()


const logout = () => {
  signOut(auth)
  let setAuthStatus = false 
  navigate('/signup')
}

  return (
    <div className="navBar d-flex justify-center">
      <Link className="navItem" to="/">
        Home
      </Link>
      { !authStatus ? (<Link className="navItem" to="/Login">
        Login
      </Link>, <Link className="navItem" to="/signup">
        SignUp
      </Link>) :
      (<Link className="navItem" to="/profile">
        Profile
      </Link>) }
      <div className="navItem" onClick={logout}>
        Log Out
      </div>
    </div>
  );
}
