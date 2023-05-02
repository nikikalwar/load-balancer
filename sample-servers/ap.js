const http = require("http");

const server = http.createServer(async(req,res)=>{
    console.log("req received",3001);
   //console.log(res); 
   res.write('Hello World! 3001'); 
   res.end()
})

server.listen(3001,()=>{
    console.log("server is running",3001)
})