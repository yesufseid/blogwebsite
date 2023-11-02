const experss=require("express");
const bodyparser=require("body-parser");
require("dotenv").config()
const app=experss();
const router=require("./routes/router")
const errorHendlerFunction=require("./middleware/error-hendler")
const notFound=require("./middleware/not-found")
var cors = require('cors')


//middlware
app.use(experss.json({limit: '25mb'}));
// app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())

// {
    //     origin:["https://seya-blogwebsite.vercel.app"],
    //     methods:["POST","GET","DELETE","PUT"],
    //     Credential:true
    // }



//routes
app.use("/api",router);








app.use(notFound)
// app.use(errorHendlerFunction)
const port=process.env.PORT || 3000;
const start =async()=>{
    try {
        
     app.listen(port,function(){
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()