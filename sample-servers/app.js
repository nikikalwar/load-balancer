const http = require("http");

const server = http.createServer(async(req,res)=>{
    console.log("req received",3000);
  // console.log(res);
  res.write('Hello World! 3000'); 
   res.end()
})

server.listen(3000,()=>{
    console.log("server is running",3000)
})