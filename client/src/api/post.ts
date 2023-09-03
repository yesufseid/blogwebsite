// import axios from "axios";



 const getPost =async () => {
   
 const res=await fetch("http://localhost:3000/api/post/4",{
    method:"GET"
  })
  const post=res.json()
  return post
//  return  axios.get('http://localhost:3000/api/post/1')
//   .then(res=>res.data
//   )
  
//   .catch(error=>error
//   )
}


export default getPost


