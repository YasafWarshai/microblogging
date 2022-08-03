import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import UserContext from "../UserContext";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    setUserId,
    authStatus,
    toggleAuth,
    setUserReference,
    setEmail,
    email,
  } = useContext(UserContext);
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  const handleLogin = async (e) => {
    await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        window.alert(error.message);
      })
      .then((userCredential) => {
        const user = userCredential.user;
        setUserReference(user.uid, {
          email: user.email,
          userName: user.email,
        });
        toggleAuth();
        setUserId(user.uid);
        console.log(toggleAuth);
        console.log(authStatus);
        navigate("/");
      });
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch((error) => {
        window.alert(error.message);
      })
      .then((userCredential) => {
        const user = userCredential.user;
        setUserReference(user.uid, {
          email: user.email,
          userName: user.email,
        });
        toggleAuth();
        setUserId(user.uid);
        console.log(authStatus);
        navigate("/");
        console.log("here");
      });
  };

  return (
    <div className="login-form">
      <form className="loginForm" onSubmit={handleSubmit}>
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
            onClick={() => navigate("/signup")}
          >
            create a new account
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
