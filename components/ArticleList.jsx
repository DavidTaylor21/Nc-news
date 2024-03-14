import { fetchAllArticles } from "../Api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import SortByFilter from "./SortByFilter";
import ErrorPage from "./ErrorPage";
function ArticleList() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null)
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setError(null)
    fetchAllArticles(topic, sortBy, order, currentPage)
      .then((articles) => {
        setTotalPages(Math.ceil(articles[0].total_count / 10));
        setAllArticles(articles);
        setIsLoading(false);
      })
      .catch((err)=>{
        setError(err.response.data.msg)
      })
  }, [currentPage]);
  useEffect(() => {
    setIsLoading(true);
    setError(null)
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    fetchAllArticles(topic, sortBy, order, 1)
      .then((articles) => {
        setTotalPages(Math.ceil(articles[0].total_count / 10));
        setAllArticles(articles);
        setIsLoading(false);
      })
      .catch((err)=>{
        setError(err.response.data.msg)
      })
  }, [order, sortBy, topic]);
  function changePage(event) {
    if (event.target.id === "previous-page") {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage !== totalPages) {
        setCurrentPage(currentPage + 1);
      }
    }
  }
  if(error){
    return <ErrorPage message ={error}/>
  }
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
  } 
  else {
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
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button onClick={changePage} id="previous-page">
          Previous Page
        </button>
        <button onClick={changePage} id="next-page">
          Next Page
        </button>
      </>
    );
  }
}
export default ArticleList;
