const http=require('http');
const port=3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Welcome to Node.js</h1>');
    res.write('<p> First Web Server </p>');
    res.end();
});

server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});