import React from "react";

export default function Tweet({ tweet }) {
  return (
    <div className="tweetItem" key={tweet.id} id={tweet.id}>
      <div className="tweetHeader">
        <div className="username">{tweet.userName}</div>
        <div className="date">{tweet.date}</div>
      </div>
      <div className="tweetText">{tweet.text}</div>
    </div>
  );
}
