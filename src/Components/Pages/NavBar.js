import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar d-flex justify-center">
      <Link className="navItem" to="/">
        Home
      </Link>
      <Link className="navItem" to="/profile">
        Profile
      </Link>
    </div>
  );
}
