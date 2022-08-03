import React from "react";
import Tweet from "./Tweet";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useContext } from "react";
import tweetContext from "./TweetContext";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";

function TweetList() {
  const [loading, setLoading] = useState(true);
  const { listofTweets, setListofTweets } = useContext(tweetContext);

  const createTweetList = () => {
    setLoading(true);
    const db = getFirestore();

    const collectionReference = collection(db, "tweets");

    const q = query(collectionReference, orderBy("date", "desc"));
    onSnapshot(q, ({ docs }) => {
      setListofTweets(
        docs.map((tweet) => {
          return { ...tweet.data(), id: tweet.id };
        })
      );
    });
    setLoading(false);
  };

  useEffect(() => {
    createTweetList();
  }, []);

  return (
    <div className="tweetList">
      {listofTweets.map((tweet) => (
        <Tweet
          tweet={tweet.text}
          id={tweet.id}
          key={tweet.id}
          userName={tweet.userName}
          date={tweet.date}
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
