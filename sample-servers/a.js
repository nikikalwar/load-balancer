const http = require("http");

const server = http.createServer(async(req,res)=>{
    console.log("req received",3002);
 //  console.log(res);
 res.write('Hello World! 3002'); 
   res.end()
})

server.listen(3002,()=>{
    console.log("server is running",3002)
})