const experss=require("express");
const bodyparser=require("body-parser");
require("dotenv").config()
const app=experss();
const router=require("./routes/router")
const errorHendlerFunction=require("./middleware/error-hendler")
const notFound=require("./middleware/not-found")


//middlware
app.use(experss.json());
app.use(bodyparser.urlencoded({extended:true}))





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