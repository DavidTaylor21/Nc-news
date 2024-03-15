import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-a2p3.onrender.com/api/",
});

function fetchAllArticles(topic = "", sortBy, order, p) {
  let urlString = `articles?p=${p}&topic=${topic}`
  if(sortBy){
    urlString+= `&sort_by=${sortBy}`
  }
  if(order){
    urlString += `&order=${order}`
  }
  return api.get(urlString).then((response) => {
    return response.data.articles;
  })
}
function fetchArticleById(article_id) {
  return api.get(`articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}
function fetchCommentsByArticle(article_id) {
  return api.get(`articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}
function patchVotesOnArticle(article_id, incNum) {
  const body = { inc_votes: incNum };
  return api.patch(`articles/${article_id}`, body).then((response) => {
    return response.data.updatedArticle;
  });
}
function fetchUsers() {
  return api.get("users").then((response) => {
    return response.data.users;
  });
}
function postComment(article_id, body) {
  return api.post(`articles/${article_id}/comments`, body).then((response) => {
    return response.data.comment;
  });
}
function deleteComment(comment_id) {
  return api.delete(`comments/${comment_id}`).then((response) => {
    return response.data;
  });
}
function fetchTopics() {
  return api.get(`topics`).then((response) => {
    return response.data.topics;
  });
}
function patchVotesOnComment(comment_id, incNum){
  const body = { inc_votes: incNum };
  return api.patch(`comments/${comment_id}`, body).then((response) => {
    return response.data.updatedComment;
  })
}
export {
  fetchAllArticles,
  fetchArticleById,
  fetchCommentsByArticle,
  patchVotesOnArticle,
  fetchUsers,
  postComment,
  deleteComment,
  fetchTopics,
  patchVotesOnComment
};
