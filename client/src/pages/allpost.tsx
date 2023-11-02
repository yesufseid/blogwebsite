
import { getallPost,DeletePost } from '../api/post';
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Loading from './loading';
import Navbar from '../commponents/Navbar';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

export default function ResponsiveGrid() {
  // const notify = () => toast("internal server error!");
  const Naviget=useNavigate()
  const queryclient=useQueryClient()
    const postQuery=useQuery({
        queryKey:["posts"],
        queryFn:getallPost,
      })
     
 const{mutate}=useMutation(DeletePost,{
onSuccess:()=>{
  queryclient.invalidateQueries({ queryKey: ['posts'] })
}
    })    
const handlemutate=(id)=>{
  alert("this action deletes the post permanetliy")
   return mutate(id)
}

      if(postQuery.isLoading) return <Loading />
      if(postQuery.isError) return null
      const posts=postQuery.data.AllPosts
       console.log(posts);
       
      

   const handler=(id)=>{
    return Naviget("/allpost/"+id)
   }   
  return (
     <div>
     <Navbar />
      <div className='grid md:grid-cols-3 gap-5 px-3 pt-3 cursor-pointer h-full bg-white'>
        {posts?.map((post)=>{
        
        return(
          <div    className="text-semiwhite bg-bray border-2 rounded-lg transition ease-in-out delay-150
           hover:-translate-y-1 hover:scale-110 hover:border-sky-600 duration-300  shadow-xl">
          <h1 className="text-left my-3 mx-5 font-serif font-bold">{post.title}</h1>
          <p  onClick={()=>handler(post.id)} className="text-left my-3 mx-5 font-mono font-semibold">{post.content.slice(0, 100)} <span className='text-sky-500'> ...</span></p>
           <div className='flex justify-end  gap-5'>
          <DeleteForeverIcon className=' cursor-pointer transition ease-in-out delay-150
           hover:-translate-y-1 hover:scale-110 hover:border-sky-600 duration-300  shadow-xl' onClick={()=>handlemutate(post.id)} />
           </div>
          </div>
       )})}
       </div>
       {/* <div className='h-full bg-black text-white'>
        fotter
       </div> */}
       {/* <ToastContainer /> */}
       </div>
  );
}