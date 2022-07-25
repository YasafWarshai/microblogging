import "./App.css";
import TweetList from "./Components/TweetList";
import { useState, useEffect } from "react";
import InputForm from "./Components/InputForm";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App(Tweets, newTweet) {
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const savedTweets = JSON.parse(
      localStorage.getItem("ITC-project2-twitter")
    );

    if (savedTweets) {
      setTweetList(savedTweets);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "ITC-project2-twitter",
      JSON.stringify(tweetList)
    );
  }, [tweetList]);

  const addTweet = (newTweet) => {
    const Tweets = [newTweet, ...tweetList];
    setTweetList(Tweets);
  };

  return (
    <div className="App">
      <InputForm addTweet={addTweet} />
      <TweetList tweetList={tweetList} Tweets={Tweets} newTweet={newTweet} />
    </div>
  );
}

export default App;
