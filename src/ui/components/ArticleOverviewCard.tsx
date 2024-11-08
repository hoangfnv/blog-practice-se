import { ArticleOverview } from "@/external-adapter/base-api/useArticleOverviewList.ts";
import { transformDate } from "@/utils/transformDate.ts";
import { HTMLProps } from "react";

type Props = {
  articleOverview: ArticleOverview
}

export function ArticleOverviewCard(props: Props & HTMLProps<HTMLDivElement>) {
  const { articleOverview, ...divProps } = props;

  function handleClick() {
    console.log(`/articles/${articleOverview.id}`)
  }

  return <div
    key={articleOverview.id}
    className={"flex flex-col border rounded px-12 py-8 text-left gap-2 text-white hover:text-black hover:bg-gray-50 cursor-pointer"}
    onClick={handleClick}
    {...divProps}
  >
    <div className={"flex flex-row justify-between gap-8"}>
      <div className={"flex gap-2 flex-wrap"}>
        {articleOverview.tags.sort().map(
          tag => <span key={tag} className={"rounded-2xl bg-gray-50 text-black px-4"}># {tag}</span>
        )}
      </div>
      <span>{transformDate(new Date(articleOverview.createAt))}</span>
    </div>
    <h2 className={"text-2xl font-bold"}>{articleOverview.title}</h2>
    <p>{articleOverview.description}</p>
  </div>
}
