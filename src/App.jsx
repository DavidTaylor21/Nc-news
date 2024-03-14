import "./App.css";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList"
import { Routes, Route } from "react-router-dom";
import Article from "../components/Article";
import Users from "../components/Users";
import { UserContext } from "../context/User";
import { useContext } from "react";
import TopicList from "../components/TopicList";
import NavButton from "../components/NavButton";
function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <>
      <NavButton path={"Users"} />
      <NavButton path={"Topics"} />
      <NavButton path={"Home"} />
      <h1 className="logo">NEWS!</h1>
      {loggedInUser.username ? (
        <h1 className="sign-in-header">
          Logged in as: {loggedInUser.username}
        </h1>
      ) : (
        <Link to={`/users`}>
          <h1 className="sign-in-header">Log in here!</h1>
        </Link>
      )}
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:topic" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics" element={<TopicList />} />
      </Routes>
    </>
  );
}

export default App;
