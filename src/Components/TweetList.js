import React from "react";
import Tweet from "./Tweet";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useContext } from "react";
import tweetContext from "./TweetContext";

function TweetList({ apiUrl }) {
  const [loading, setLoading] = useState(true);
  const {listofTweets, setListofTweets} = useContext(tweetContext)

  const createTweetList = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        const { tweets } = response.data;
        setListofTweets(tweets);
        setLoading(false);
      })
      .catch(function (error) {
        window.alert(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    createTweetList();
  });

  return (
    <div className="tweetList">
      {listofTweets.map((object) => (
        <Tweet
          tweet={object.content}
          id={object.id}
          key={object.id}
          userName={object.userName}
          date={object.date}
        />
      ))}
      <Spinner
        animation="border"
        role="status"
        className={`${loading ? "" : "visually-hidden"}`}
      ></Spinner>
    </div>
  );
}

export default TweetList;
