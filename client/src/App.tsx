import{RouterProvider} from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import router from "./utils/routes"

const queryClient = new QueryClient()

function App() {
 
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <RouterProvider  router={router}/>
     </QueryClientProvider>
    </>
  )
}

export default App
