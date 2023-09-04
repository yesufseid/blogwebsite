
import { useQuery } from "@tanstack/react-query"
import makeSession from "../utils/useSession";  



export default function login() {
   
    const getUser =async ()=>{
        const data={
            email:"seidyesuf",
            password:"12345678"
        }
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }; 
    const res=await fetch("http://localhost:3000/api/login",options)
         const post=res.json()
        return post
       }
    const postQuery=useQuery({
        queryKey:["user"],
        queryFn:getUser
      })
       
      if(postQuery.isLoading) return <h1>...loding</h1>
      if(postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>
      console.log(postQuery.data.user);
      console.log(postQuery.data.accessToken);
      const data={
        id:postQuery.data.user.id,
        email:postQuery.data.user.email,
        accessToken:postQuery.data.accessToken
      }
makeSession(data)
// const Session=window.localStorage
// Session.setItem("accessToken",postQuery.data.accessToken)
// Session.setItem("id",postQuery.data.user.id)
// Session.setItem("email",postQuery.data.user.email)

  return (
    <div>login</div>
  )
}
