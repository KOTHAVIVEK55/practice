const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("hello world");
});
server.listen(3000,()=>{
    console.log("server running on port 3000");
});









console.log("1000");
setTimeout(()=>{
    console.log("3000");
},2000);

console.log("1000");





// const fs=require('fs').promises;
// fs.readFile("message.txt","utf-8").then(data=>console.log(data))
// .catch(err=>console.log(err));






// const fetchData=new Promise((resolve,reject)=>{
//     const valid=true;
//     if(valid){
//         resolve("data fetched");
//     }else{
//         reject("not resolved");
//     }
// });


// async and await

// async function isNode(){
//     try{
//         const data=await fetchdata;
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }


// middlewares

// const express=require('express');
// const app=express();

// const middleware=(req,res,next)=>{
//     res.send("middleware");
//     next();
// }


// app.use(middleware);


