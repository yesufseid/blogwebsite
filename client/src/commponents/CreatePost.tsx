import { useState } from "react"
import Navbar from "./Navbar"
import axios from "axios"



export default function CreatePost() {
    const [title,setTitle]=useState("")
    const [image,setimage]=useState("")
    const [text,setText]=useState("")
const fileUplode=async(e)=>{
    const file=e.target.files[0]
    const Base64= await ConvertToBase64(file)
    return setimage(Base64)
}
  
async function postData( ) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/api',
    data: {
       title:title,
       img:image,
       content:text
  }})
     .then(res=>res)
     .catch(er=>console.log(er)
     )
  }

  return (
    <div>
      <Navbar />
      <div>
        <input type="text"  onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div>
        <input type="file" onChange={e=>fileUplode(e)} />
      </div>
       <div>
        <textarea name="content" cols={30} rows={10} onChange={e=>setText(e.target.value)}> </textarea>
       </div>
       <button onClick={()=>postData()}>Post</button>
       <img src={image} alt="img" />
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
