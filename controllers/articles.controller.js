const {
  selectArticleById,
  selectAllArticles,
  updateVotesOnArticle,
} = require("../models/articles.models");

const {
  insertComment,
  selectCommentsByArticle,
} = require("../models/comments.models");

function getArticleById(req, res, next) {
  const { article_id } = req.params;
  selectArticleById(article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
}
function getAllArticles(req, res, next) {
  selectAllArticles()
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
}
function getCommentsByArticle(req, res, next) {
  const { article_id } = req.params;
  Promise.all([
    selectCommentsByArticle(article_id),
    selectArticleById(article_id),
  ])
    .then((comments) => {
      res.status(200).send({ comments: comments[0] });
    })
    .catch(next);
}
function postCommentForArticle(req, res, next) {
  const { article_id } = req.params;
  const body = req.body;
  Promise.all([selectArticleById(article_id), insertComment(article_id, body)])
    .then((comment) => {
      res.status(201).send({ comment: comment[1] });
    })
    .catch(next);
}
function patchVotesOnArticle(req, res, next) {
  const { article_id } = req.params;
  const votes = req.body.inc_votes;
  Promise.all([
    selectArticleById(article_id),
    updateVotesOnArticle(article_id, votes),
  ])
    .then((updatedArticle) => {
      res.status(200).send({ updatedArticle: updatedArticle[1] });
    })
    .catch(next);
}

module.exports = {
  getArticleById,
  getAllArticles,
  getCommentsByArticle,
  postCommentForArticle,
  patchVotesOnArticle,
};
