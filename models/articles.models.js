const db = require("../db/connection");
function selectArticleById(article_id) {
  return db
    .query(
      `
    SELECT * FROM articles
    WHERE article_id = $1`,
      [article_id]
    )
    .then((response) => {
      if (response.rows.length === 0) {
        return Promise.reject({ status: 404, msg: "article not found" });
      }
      return response.rows[0];
    });
}
function selectAllArticles() {
  return db
    .query(
      `
    SELECT articles.author, title, articles.article_id, topic, articles.created_at, articles.votes, article_img_url, CAST(COUNT(comments.comment_id) AS INT) AS comment_count FROM articles
    LEFT JOIN comments
    ON articles.article_id = comments.article_id
    GROUP BY articles.article_id
    ORDER BY articles.created_at DESC;
    `
    )
    .then((response) => {
      return response.rows;
    });
}
function updateVotesOnArticle(article_id, votes){
  return db.query(`
  UPDATE articles
  SET votes = votes + $1
  WHERE article_id = $2
  RETURNING *;`, [votes, article_id])
  .then((response)=>{
    return response.rows[0]
  })
}


module.exports = {
  selectArticleById,
  selectAllArticles,
  updateVotesOnArticle
};
