import React from "react";
import Tweet from "./Tweet";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function TweetList({ apiUrl }) {
  const [Serverlist, setServerList] = useState([]);
  const [loading, setLoading] = useState(true);

  const createTweetList = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        const { tweets } = response.data;
        setServerList(tweets);
        setLoading(false)
      })
      .catch(function (error) {
        window.alert(error);
        setLoading(false)
      })
  };

  useEffect(() => {
    createTweetList();
  });

  return (
    <div className="tweetList">
      {Serverlist.map((object) => (
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
