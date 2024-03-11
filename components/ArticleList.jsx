import { fetchAllArticles } from "../Api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
function ArticleList() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((articles) => {
      setAllArticles(articles);
    });
  }, []);
  return (
    <>
      <ul className="article-list">
        <li>
          {...allArticles.map((article) => {
            return <ArticleCard article={article} />;
          })}
        </li>
      </ul>
    </>
  );
}
export default ArticleList;
