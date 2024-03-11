function ArticleCard({ article }) {
    const date = new Date(article.created_at).toUTCString()
  return (
    <section key={article.article_id} className="article-card">
      <h1>{article.title}</h1>
      <p>{article.topic}</p>
      <img src= {article.article_img_url}/>
      <p>Written by {article.author}</p>
      <p>Posted {date}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.total_count}</p>
    </section>
  );
}
export default ArticleCard;

