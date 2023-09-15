
import logo from "../assets/react.svg"
import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";


export default function Navbar() {
  const session=window.localStorage
  const accessToken=session.accessToken



  return (
    <div className="flex md:px-10  py-5 bg-slate-400 font-serif ">
      <div>
        {accessToken?( <NavLink
           to="/"
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           }
         >
          <img src={logo} alt="Logo" className="ml-5" />
         </NavLink>):( <img src={logo} alt="Logo" className="ml-5" />)}
      </div>
        {accessToken?(
          <div className="ml-auto grid grid-cols-3 gap-5">
              <NavLink
           to="/"
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           }
         >
           Home
         </NavLink>
         <NavLink
           to="/allpost"
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           }
         >
           All Posts
         </NavLink>
          </div>
          
        ):(<p  className="ml-auto mr-10 font-sans">hellow</p>)}
       
   </div>
  )
}
