import { checkUserLogin } from "@/businessLogic/checkUserLogin.ts";
import { checkUserPermission } from "@/businessLogic/checkUserPermission.ts";

type ShowFullArticleCondition = 'Login' | 'Subscribe'

type Result = {
  response: false,
  errorType: ShowFullArticleCondition,
} | {
  response: true,
  errorType: undefined
}

export function requestToShowFullArticle(): Result {
  const isLogin = checkUserLogin()
  if (!isLogin) {
    return {
      response: false,
      errorType: 'Login'
    }
  }
  const hasPermission = checkUserPermission('readFullArticle')
  if (!hasPermission) {
    return {
      response: false,
      errorType: 'Subscribe'
    }
  }

  return {
    response: true,
    errorType: undefined,
  }
}
