import React from "react";


export default function Tweet({ tweet, id, userName, date }) {

  return (
    <div className="tweetItem" key={id} id={id}>
      <div className="tweetHeader">
        <div className="username">{userName}</div>
        <div className="date">{date}</div>
      </div>
      <div className="tweetText">{tweet}</div>
    </div>
  );
}
