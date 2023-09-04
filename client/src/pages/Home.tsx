import CreatePost from '../commponents/CreatePost'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
export default function Home() {
  const navigate=useNavigate()
useEffect(()=>{
   const session=window.localStorage
   console.log(session);
  if(session.length===0) return navigate("/login")
},[])   
  

  return (
    <div>
        <CreatePost />
    </div>
  )
}
