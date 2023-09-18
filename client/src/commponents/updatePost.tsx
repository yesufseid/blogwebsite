
import { useState } from "react"
import { Link,} from "react-router-dom"


export default function Home({ids,titles,img,content}) {
  const session=window.localStorage
  const accessToken=session.accessToken
    const [title,setTitle]=useState(titles)
    const [image,setimage]=useState(img)
    const [text,setText]=useState(content)
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
  id:ids
}
const options = {
  method:'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':accessToken
  },
  body: JSON.stringify(data)
}; 
const postData=async()=>{
  console.log("ghjk");
  
  const res=await fetch("http://localhost:3000/api",options)
  if(!res.ok) return console.log("error");
  
  if(res.ok){
    const post=await res.json()
    
    return setId(post.id)
  }
 



}




  return (
    <div>
      <div className="px-5 text-center">
          
      <input type="text" className="my-5 font-semibold text-5xl text-left" defaultValue={title}  onChange={(e)=>setTitle(e.target.value)}
       />
   {
     <div>
     <label htmlFor="file">{image?(<img  className="h-96 w-auto mx-auto " src={image} alt="img" />):(null)}</label>
     <input type="file"  id="file" className="my-5 invisible " onChange={e=>fileUplode(e)}   />
   </div>
   }
      <textarea className="text-justify my-5 leading-relaxed font-semibold w-96 md:w-full h-52 md:h-96"  defaultValue={text} onChange={e=>setText(e.target.value)}/>
      </div>
      <button onClick={()=>postData()} className="hover:bg-sky-500 rounded-lg px-3 py-2 my-5 bg-black text-white mx-auto">Save change</button>
      {id?(<Link  className="text-blue-600" to={`/allpost/${id}`}>http://localhost:5173/allpost/{id}</Link>):null}
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
