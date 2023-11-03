const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const asyncWarapper=require("../middleware/async")



//index route
const getallPost=asyncWarapper( async(req,res)=>{
  if (!req.user) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  const AllPosts = await prisma.post.findMany({
    select:{
      id:true,
      title:true,
      content:true
    },
    orderBy: [
      {
        id:'desc',
      },
    ],
  })
  if(!AllPosts){
    const error={
      message:`file not found in this ${id} id`,
      status:404
    }
    res.status(404).json({msg:error})
  }
    
  console.log("1");
  res.status(200).json({AllPosts})
});


const creatPost=asyncWarapper( async(req,res,next)=>{
  if (!req.user) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  
  const {title,content,img}=req.body
  const post=await prisma.post.create({
    data:{
      title:title,
      img:img,
      content:content,
    }
  })
  if(!post){
    const error={
      message:`file not found in this ${id} id`,
      status:404
    }
    res.status(404).json({msg:error})
  }
  res.status(200).json(post)   
});

const updatePost=asyncWarapper( async(req,res,next)=>{
  console.log("hellow");
  if (!req.user) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  const {title,content,img}=req.body
  const id=req.body.id
  const post = await prisma.post.update({
    where: { id: id },
    data: { title:title,
             img:img,
            content:content
     },
  })
  if(!post){
    const error={
      message:`file not found in this ${id} id`,
      status:404
    }
    res.status(404).json({msg:error})
  }
  res.status(200).json(post)
})



//login route





//post route
const getPost=asyncWarapper( async(req,res,next)=>{
    const id=req.params.postId
    console.log(id);
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    })
     if (!post){
        const error={
          message:`file not found in this  ${Taskid} id`,
          status:404
        }
        res.status(404).json({msg:error})
     }
     res.status(200).json(post)
});

const deletPost=asyncWarapper( async(req,res,next)=>{
  if (!req.user) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  const id=req.params.postId
  console.log(id);

  const post = await prisma.post.delete({
    where: { id:id },
  })
  if(!post){
    const error={
      message:`file not found in this ${Taskid} id`,
      status:404
    }
    res.status(404).json({msg:error})
  }
  res.status(200).json(post)

});







module.exports={getallPost,
                 getPost,
                 deletPost,
                 updatePost,
                 creatPost,
}