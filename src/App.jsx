import "./App.css";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import Article from "../components/Article";

function App() {
  return (
    <>
      <h1 className="logo">NEWS!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
