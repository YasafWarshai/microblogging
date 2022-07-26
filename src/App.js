import "./App.css";
import TweetList from "./Components/TweetList";
import { useState } from "react";
import InputForm from "./Components/InputForm";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App(Tweets, newTweet) {
  const apiUrl =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [tweetList, setTweetList] = useState([]);


  const addTweet = (newTweet) => {
    const Tweets = [newTweet, ...tweetList];
    setTweetList(Tweets);
  };

  return (
    <div className="App">
      <InputForm addTweet={addTweet} apiUrl={apiUrl} />
      <TweetList
        tweetList={tweetList}
        apiUrl={apiUrl}
        Tweets={Tweets}
        newTweet={newTweet}
      />
    </div>
  );
}

export default App;
