interface sessionProps{
    id:string
    email:string
    accessToken:string
}



const makeSession=({id,email,accessToken}:sessionProps)=>{
    const Session=window.localStorage
    Session.setItem("accessToken",accessToken)
    Session.setItem("id",id)
    Session.setItem("email",email)
}


export default makeSession