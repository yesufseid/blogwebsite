const express=require("express");
const router=express.Router();
const  {
    signup,
    signin
  } = require("../controllers/auth");
const {getallPost,
      getPost,
      creatPost,
      deletPost,
      updatePost} =require("../controllers/index")
const verifyToken = require('../middleware/authJWT')




router.route("/login").post(signin)
router.route("/register").post(signup)
router.route("/").get(verifyToken,getallPost).post(verifyToken,creatPost).put(verifyToken,updatePost)
router.route("/post/:postId").get(getPost).delete(verifyToken,deletPost)


module.exports=router;