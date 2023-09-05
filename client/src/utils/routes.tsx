
import {Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Home from "../pages/Home"
import Post from "../pages/Post"
import Login from "../pages/login";
import Allpost from "../pages/allpost"



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/allpost" element={<Allpost/>} />
        <Route path="/post/:id" element={<Post/>} />
      </Route>
    )
  );

export default router