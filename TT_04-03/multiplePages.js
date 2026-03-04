const http=require('http');
const port=3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/home' || req.url === '/'){
        res.write("<h1 style='color:blue;font-weight:bold;'>Welcome to Home Page</h1>");
    }
    else if(req.url === '/login'){
        res.write("<h1 style='color:green;font-weight:bold;'>Welcome to Login Page</h1>");
    }
    else{
        res.write("<h1 style='color:red;font-weight:bold;'>404 Page Not Found</h1>");
    }
    res.end();
});

server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});