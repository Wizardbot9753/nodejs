import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('show the response!');
})


const PORT = process.env.PORT || 3030;
const HOST = 'localhost';

server.listen(PORT,HOST,() => {
    console.log('sever running on port http://localhost:3030')
});