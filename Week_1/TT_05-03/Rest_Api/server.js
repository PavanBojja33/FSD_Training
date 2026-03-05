const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type" , "application/json");
    let products = JSON.parse(fs.readFileSync('products.json', 'UTF-8'));
    if(req.url === '/' || req.url === '/home'){
        res.end(JSON.stringify({"message" : "Welcome to REST API"}));
    }
    else if(req.url === '/products' && req.method === 'GET'){
        res.end(JSON.stringify({products,"message" : "Data retrieval done"}));
    }
    else if(req.method === 'POST' && req.url === '/products'){
        let body="";
        req.on("data",(chunk) => {
            body+=chunk;
        })
        req.on("end",() => {
            const newpro=JSON.parse(body);
            products.push(newpro)
            fs.writeFileSync("products.json",JSON.stringify(products))
            res.end(JSON.stringify({products,"message" : "Data added"}));
        })
    }
})

server.listen(port,() => {
    console.log("Server is running at "+port);
})