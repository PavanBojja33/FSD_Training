const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req,res) => {
    fs.readFile("readme.txt","UTF-8",(err,data) => {
        if(err){
            res.end("<h1> Error </h1>");
            return;
        }
        res.setHeader('Content-Type','text/html')
        res.write("<h2> File Content from server : "+data+"</h2>");
        res.end();
    })
})

server.listen(port,() => {
    console.log(`Server running at ${port}`);
})