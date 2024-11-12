import { ArticleDetailPage } from "@/ui/pages/ArticleDetail.tsx";
import { Home } from "@/ui/pages/Home.tsx";
import { RoutePaths } from "@/ui/router/routePathFactory.ts";
import { Route, Switch } from "wouter";

export function AppRouter() {
  return <>
    <Switch>
      <Route path={RoutePaths.home} component={Home} />
      <Route path={RoutePaths.articleDetail} component={ArticleDetailPage} />
      <Route component={() => <>Error 404: Page not found</>} />
    </Switch>
  </>
}
