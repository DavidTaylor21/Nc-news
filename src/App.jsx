import "./App.css";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import Article from "../components/Article";
import Users from "../components/Users";
import { UserContext } from "../context/User";
import { useContext } from "react";
function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <>
      <Link to={`/`}>
        <h1 className="logo">NEWS!</h1>
      </Link>
      {loggedInUser.username ? <h1 className="sign-in-header">Logged in as: {loggedInUser.username}</h1> : <Link to={`/users`}>
        <h1 className="sign-in-header">Log in here!</h1>
      </Link>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
