import { useState } from "react"
import Navbar from "./Navbar"
import { Link,} from "react-router-dom"


export default function CreatePost() {
  const session=window.localStorage
  const accessToken=session.accessToken
    const [title,setTitle]=useState("")
    const [image,setimage]=useState("")
    const [text,setText]=useState("")
    const [id,setId]=useState()
const fileUplode=async(e)=>{
    const file=e.target.files[0]
    const Base64= await ConvertToBase64(file)
    return setimage(Base64)
}
  
const data={
  title:title,
  content:text,
  img:image,
}
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':accessToken
  },
  body: JSON.stringify(data)
}; 
const postData=async()=>{
  const res=await fetch("http://localhost:3000/api",options)
  if(!res.ok) return console.log("error");
  
  if(res.ok){
    const post=await res.json()
    
    return setId(post.id)
  }
 



}

// async function postData( ) {
//   axios({
//     method: 'post',
//     url: 'http://localhost:3000/api',
//     data: {
//        title:title,
//        img:image,
//        content:text
//   }})
//      .then(res=> Navigeter(""))
//      .catch(er=>console.log(er)
//      )
//   }

  return (
    <div>
      <Navbar />
      <div className="mx-20">
      <div className="mt-10">
        <label htmlFor="" className="my-5">Title</label> <br />
        <input type="text"  className=" border-2 border-sky-500 rounded-lg w-96 h-10 my-5" onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div>
        <input type="file" className="my-5" onChange={e=>fileUplode(e)} />
      </div>
       <div>
        <textarea name="content" className="border-2 border-sky-500 rounded-lg" cols={150} rows={10} onChange={e=>setText(e.target.value)}> </textarea>
       </div>
      
       <button className="border-2 rounded-md bg-sky-600 w-24 h-8 hover:bg-transparent" onClick={()=>postData()}>Post</button> <br />
      {id?(<Link  className="text-blue-600" to={"/post/id"}>http://localhost:3000/api/post/{id}</Link>):null}
       </div>
    </div>

  )
}

function ConvertToBase64(file){
  return new Promise((resolve, reject) => {
     const fileReader=new FileReader()
     fileReader.readAsDataURL(file)
     fileReader.onload=()=>{
      resolve(fileReader.result)
     }
     fileReader.onerror=(error)=>{
      reject(error)
     }
  })
}
