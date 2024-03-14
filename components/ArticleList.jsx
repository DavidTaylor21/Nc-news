import { fetchAllArticles } from "../Api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import SortByFilter from "./SortByFilter";
function ArticleList() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(topic, sortBy, order).then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, [topic, order, sortBy]);
  if (isLoading) {
    return (
      <>
        <SortByFilter
          setOrder={setOrder}
          setSortBy={setSortBy}
          sortBy={sortBy}
          order={order}
        />
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <SortByFilter
          setOrder={setOrder}
          setSortBy={setSortBy}
          sortBy={sortBy}
          order={order}
        />
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
}
export default ArticleList;
