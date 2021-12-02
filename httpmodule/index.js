// import http from 'http' ;

// creating server in http module 

// const server = http.createServer((req, res)=>{
// res.end("show the response")
// });

// we need to give response to run the server in the browser for that use "end" function

// server.listen(3030,'localhost',()=>{
//     console.log('sever running at http://localhost:3030')
// });

// listen function only creates the request for the server
// to let the user know what happened after you run the server you can give callback function inside "listen" function

import http from 'http';

// creating server in http module
// recommended dynamic creation of port and host

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.setHeader("content-Type", "text/plaintext");
    res.end('show the response2!')
});

const PORT = process.env.PORT || 3010;
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('server running at http://localhost:3010')
});