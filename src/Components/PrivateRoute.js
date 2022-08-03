import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const { children } = props;
  const { authStatus } = useContext(UserContext);
  return !authStatus ? <Navigate to="/signup" /> : children;
}
