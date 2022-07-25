import React from "react";
import Tweet from "./Tweet";

function TweetList({ tweetList }) {
  return (
    <div className="tweetList">
      {tweetList &&
        tweetList.length > 0 &&
        tweetList.map((tweet) => (
          <Tweet
            tweet={tweet}
            id={tweet.id}
            key={tweet.id}
            userName={tweet.userName}
            date={tweet.date}
          />
        ))}
    </div>
  );
}

export default TweetList;
