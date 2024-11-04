import { ofetch } from "ofetch";

export const BlogServerFetch = ofetch.create({
  baseURL: 'https://api.blog-fe.com',
  retry: 0,
  onResponseError: [
    context => {
      throw context.response._data.errorCode
      || context.response.status
    }
  ]
})
