import "./styles.css";
import TweetList from "../TweetList";
import { useState, useContext, useEffect } from "react";
import InputForm from "../InputForm";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";


function Home(Tweets, newTweet) {
  const apiUrl =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [tweetList, setTweetList] = useState([]);
  const { userId } = useContext(UserContext)
  const navigate = useNavigate()

  const addTweet = (newTweet) => {
    const Tweets = [newTweet, ...tweetList];
    setTweetList(Tweets);
  };

// useEffect(() => {
//   if (!userId) navigate('/Signup')
// }, [])


  return (
    <div className="Home">
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

export default Home;
