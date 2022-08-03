import React, { useContext } from "react";
import UserContext from "./UserContext";



export default function Tweet({ tweet, id, date }) {

  const { userId, userName }= useContext( UserContext )

  return (
    <div className="tweetItem" key={id} userid={userId} id={id}>
      <div className="tweetHeader">
        <div className="username">{userName}</div>
        <div className="date">{date}</div>
      </div>
      <div className="tweetText">{tweet}</div>
    </div>
  );
}
