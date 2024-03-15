import "./App.css";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Article from "../components/Article";
import Users from "../components/Users";
import { UserContext } from "../context/User";
import { useContext, useEffect } from "react";
import TopicList from "../components/TopicList";
import NavButton from "../components/NavButton";
import ErrorPage from "../components/ErrorPage";
import ScrollToTop from "react-scroll-to-top";
function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setLoggedInUser(loggedUser);
    }
  }, []);
  return (
    <>
      <div className="header">
        <NavButton path={"Topics"} id="Topics-grid" />
        <NavButton path={"Home"} id="Home-grid" />
        <NavButton path={"Users"} id="Users-grid" />
      </div>
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
        <Route path="/topics/:topic" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics" element={<TopicList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
