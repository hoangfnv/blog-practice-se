import { useArticleList } from "@/external-interface/base-api/useArticleList.ts";

export function Home() {
  const articleListQuery = useArticleList()

  return <>
    <h1>Home</h1>
    {articleListQuery.data?.map((article) => <div key={article.id}>
      {article.title}
    </div>)}
  </>
}
