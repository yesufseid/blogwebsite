
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { getallPost } from '../api/post';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    const Naviget=useNavigate()
    const postQuery=useQuery({
        queryKey:["posts"],
        queryFn:getallPost
      })
       
      if(postQuery.isLoading) return <h1>...loding</h1>
      if(postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>
      const posts=postQuery.data.allPosts
   
      

   const handler=(id)=>{
    return Naviget("/post/"+id)
   }   




  return (
    <Box sx={{ flexGrow: 1, }}>
      <Grid container spacing={{ xs: 2, md:1 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {posts.map((post)=>(
          <Grid item xs={6} sm={6} md={4}  >
            <Item sx={{
                       padding:0,
                       margin:1 }}>
          <div onClick={()=>handler(post.id)}  className=" border-2 rounded-lg  border-stone-950 transition ease-in-out delay-150
           hover:-translate-y-1 hover:scale-110 hover:border-sky-600 duration-300  shadow-xl">
          <h1 className="text-left my-3 mx-5 font-serif font-bold">{post.title}</h1>
          <p  className="text-left my-3 mx-5 font-mono font-semibold">{post.content.slice(0, 100)}</p>
          </div>
         </Item>
          </Grid>
       
       ))}
      </Grid>
    </Box>
  );
}