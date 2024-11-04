import { http, HttpResponse } from "msw";

const articleList = [
  {
    id: 'article-1',
    title: 'Title 1',
    description: 'Description 1',
    thumbnail: 'thumbnail-1.png',
  },
  {
    id: 'article-2',
    title: 'Title 2',
    description: 'Description 2',
    thumbnail: 'thumbnail-2.png',
  },
  {
    id: 'article-3',
    title: 'Title 3',
    description: 'Description 3',
    thumbnail: 'thumbnail-3.png',
  },
]


const ArticleResponseSuccess = {
  status: 'success',
  data: articleList
}

const getArticleList = http.get('https://api.blog-fe.com/articles', () => {
  return HttpResponse.json(ArticleResponseSuccess, {status: 200})
})

export const homeApis = [
  getArticleList
]
