import { useArticleToDisplay } from "@/ui/hooks/useArticleToDisplay.ts";
import { RoutePathFactory } from "@/ui/router/routePathFactory.ts";
import { useLocation, useParams } from "wouter";

export function ArticleDetailPage() {
  const params = useParams()
  const [, navigate] = useLocation()
  const { articleQuery, conditionToShowFull } = useArticleToDisplay(params.id)

  function handleClickBack() {
    navigate(RoutePathFactory.home())
  }

  function handleClickLogin() {
    alert('Request to Login')
  }

  function handleClickSubscribe() {
    alert('Request to Subscribe')
  }

  return <>
    <button onClick={handleClickBack}>Back</button>
    <h1>{articleQuery?.data?.title}</h1>
    <p>{articleQuery?.data?.content}</p>
    {conditionToShowFull === 'Login'
      && <button onClick={handleClickLogin}>
        Click to Login
      </button>
    }
    {conditionToShowFull === 'Subscribe'
      && <button onClick={handleClickSubscribe}>
        Click to Subscribe
      </button>
    }
  </>
}
