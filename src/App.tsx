import { AppRouter } from "@/ui/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

function App() {

  return <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
}

export default App
