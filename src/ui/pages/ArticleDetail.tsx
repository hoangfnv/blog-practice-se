import { useArticleDetail } from "@/external-adapter/base-api/useArticleDetail.ts";
import { useParams } from "wouter";

export function ArticleDetailPage() {
  const params = useParams()
  const articleDetail = useArticleDetail(params.id)
  return <>
    <h1>{articleDetail.data?.title}</h1>
    <p>{articleDetail.data?.content}</p>
  </>
}
