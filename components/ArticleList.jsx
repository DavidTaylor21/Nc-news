import { fetchAllArticles } from "../Api";
import { useState, useEffect} from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
function ArticleList() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("topic");
  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(sortByQuery).then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, [searchParams]);
  if (isLoading) {
    return <Loading />;
  } else {
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
}
export default ArticleList;
