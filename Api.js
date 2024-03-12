import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nc-news-a2p3.onrender.com/api/'
});

function fetchAllArticles(){
    return api.get('articles').then((response)=>{
        return response.data.articles
    })
}
function fetchArticleById(article_id){
    return api.get(`articles/${article_id}`).then((response) => {
        return response.data.article
    })
}
function fetchCommentsByArticle(article_id){
    return api.get(`articles/${article_id}/comments`).then((response)=>{
        return response.data.comments
    })
}
function patchVotesOnArticle(article_id, incNum){
    const body = {inc_votes: incNum}
    return api.patch(`articles/${article_id}`, body).then((response)=>{
        return response.data.updatedArticle
    })
}
export {fetchAllArticles, fetchArticleById, fetchCommentsByArticle, patchVotesOnArticle}