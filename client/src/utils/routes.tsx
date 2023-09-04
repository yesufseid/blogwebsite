
import {Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Home from "../pages/Home"
import Post from "../pages/Post"
import Login from "../pages/login";



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post/:id" element={<Post/>} />
      </Route>
    )
  );

export default router