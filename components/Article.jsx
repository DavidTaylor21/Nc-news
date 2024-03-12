import { fetchArticleById, fetchCommentsByArticle } from "../Api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SingleArticleCard from "./SingleArticleCard";
import CommentsList from "./CommentsList";
import HomeButton from "./HomeButton";
function Article() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentComments, setCurrentComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchArticleById(article_id),
      fetchCommentsByArticle(article_id),
    ]).then((results) => {
      setCurrentArticle(results[0]);
      setCurrentComments(results[1]);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <section className="single-article-page">
      <SingleArticleCard currentArticle={currentArticle} />
      <CommentsList currentComments={currentComments} />
      <HomeButton />
    </section>
  );
}

export default Article;
