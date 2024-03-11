import { fetchArticleById } from "../Api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import SingleArticleCard from "./SingleArticleCard";
function Article() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setIsLoading(true);
      setCurrentArticle(article);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <SingleArticleCard currentArticle={currentArticle} />
        <Link to={`/`}>
          <label htmlFor="home"></label>
          <button id="home">take me home</button>
        </Link>
      </>
    );
  }
}
export default Article;
