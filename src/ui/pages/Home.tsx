import { useArticleOverviewList } from "@/external-adapter/base-api/useArticleOverviewList.ts";
import { ArticleOverviewCard } from "@/ui/components/ArticleOverviewCard.tsx";

export function Home() {
  const articleListQuery = useArticleOverviewList()

  return <>
    <h1>Home</h1>
    <div className={"max-w-[900px] flex flex-col gap-8 mt-4"}>
      {articleListQuery.data?.map(
        article => <ArticleOverviewCard key={article.id} articleOverview={article} />
      )}
    </div>
  </>
}
