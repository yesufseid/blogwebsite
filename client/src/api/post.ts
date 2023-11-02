// import axios from "axios";



 export const getPost =async () => {
   
  const res=await fetch("http://localhost:3000/api/post/4",{
    method:"GET"
  })
  const post=res.json()
  return post
}





export const getallPost =async () => {
  const session=window.localStorage
  const accessToken=session.accessToken
   
  const res=await fetch("http://localhost:3000/api/",{
     method:"GET",
     headers: {
      'Content-Type': 'application/json',
      'Authorization':accessToken
    },
   })
   const post=res.json()
   return post
 }
 
 export const DeletePost =async (id) => {
  const session=window.localStorage
  const accessToken=session.accessToken
   
  const res=await fetch("http://localhost:3000/api/post/"+id,{
     method:"DELETE",
     headers: {
      'Content-Type': 'application/json',
      'Authorization':accessToken
    },
   })
   const post=res.json()
   return post
 }
