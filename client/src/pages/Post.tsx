import Navbar from "../commponents/Navbar"
import { useQuery } from "@tanstack/react-query"
import getPost from "../api/post"

export default function Home() {
  const postQuery=useQuery({
    queryKey:["posts"],
    queryFn:getPost
  })
   
  if(postQuery.isLoading) return <h1>...loding</h1>
  if(postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>
const{id,title,content,img}=postQuery.data



  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="px-5 text-center">
      <h1 className="my-5 font-semibold text-5xl text-left">{title}</h1>
   {
    img?(<img  className="h-96 w-auto mx-auto " src={img} alt="img" />):(null)
   }
      <p className="text-justify my-5 leading-relaxed font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         earum facilis, dolores in suscipit nulla asperiores molestias deleniti quisquam esse.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vitae repudiandae soluta 
         deserunt earum nam ullam rem incidunt libero similique fuga sunt, eveniet ea voluptates fugit 
         voluptate odit quis. Nobis!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel accusamus nemo. Rerum magnam
          corporis odit deserunt tempora maiores
          beatae illum, nemo culpa tempore eos ex dignissimos tenetur provident veritatis!
          ስጅጅስክልስ ህፕልውክጅዱጅ ህጂኦልል
         </p>
      </div>
     
    </div>
  )
}
