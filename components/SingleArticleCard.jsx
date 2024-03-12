import VoteButton from "./VoteButton";
import {useState} from 'react'
function SingleArticleCard({ currentArticle}) {
  const date = new Date(currentArticle.created_at).toUTCString();
  const [votes, setVotes] = useState(currentArticle.votes)
  return (
    <section className="single-article">
      <h1>{currentArticle.title}</h1>
      <p>{currentArticle.topic}</p>
      <img src={currentArticle.article_img_url} id="single-item-image"/>
      <p id="single-article-body">{currentArticle.body}</p>
      <p>Written by {currentArticle.author}</p>
      <p>Posted {date}</p>
      <VoteButton setVotes={setVotes} votes={votes} article_id={currentArticle.article_id} />
    </section>
  );
}
export default SingleArticleCard;
