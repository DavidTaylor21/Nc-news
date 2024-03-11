import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nc-news-a2p3.onrender.com/api/'
});

function fetchAllArticles(){
    return api.get('articles').then((response)=>{
        return response.data.articles
    })
}
export {fetchAllArticles}