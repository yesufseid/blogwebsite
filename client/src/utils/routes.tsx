
import {Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Home from "../pages/Home"
import Post from "../pages/Post"



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path="/post/:id" element={<Post/>} />
      </Route>
    )
  );

export default router