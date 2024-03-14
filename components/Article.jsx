import { fetchArticleById, fetchCommentsByArticle } from "../Api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SingleArticleCard from "./SingleArticleCard";
import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";
import ErrorPage from "./ErrorPage";
function Article() {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentComments, setCurrentComments] = useState([]);
  const [error, setError] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchArticleById(article_id),
      fetchCommentsByArticle(article_id),
    ]).then((results) => {
      setCurrentArticle(results[0]);
      setCurrentComments(results[1]);
      setIsLoading(false);
    })
    .catch((err)=>{
      setError(err.response.data.msg)
    });
  }, []);
  if(error){
    return <ErrorPage message={error}/>
  }
  return isLoading ? (
    <Loading />
  ) : (
    <section className="single-article-page">
      <SingleArticleCard currentArticle={currentArticle} />
      <CommentAdder
        setCurrentComments={setCurrentComments}
        article_id={article_id}
      />
      <CommentsList currentComments={currentComments} setCurrentComments={setCurrentComments} />
    </section>
  );
}

export default Article;
