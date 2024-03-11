import {Link} from 'react-router-dom'
function ArticleCard({ article }) {
  const date = new Date(article.created_at).toUTCString();
  return (
    <section key={article.article_id} className="article-card">
      <Link to={`/article/${article.article_id}`}>
        <h1 id="article-header">{article.title}</h1>
      </Link>
      <p id="article-topic">{article.topic}</p>
      <img src={article.article_img_url} id="article-photo" />
      <p id="article-author">Written by {article.author}</p>
      <p id="article-date">Posted {date}</p>
      <p id="article-votes">Votes: {article.votes}</p>
      <p id="article-comment-count">Comments: {article.total_count}</p>
    </section>
  );
}
export default ArticleCard;
