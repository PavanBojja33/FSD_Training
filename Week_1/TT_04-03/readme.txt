Node.js Web Server Project
📌 Overview
        Built simple HTTP servers in Node.js:

        firstServer.js → basic server with static HTML.

        multiplePages.js → multi-page server handling /home, /login, and 404 routes.

        Integrated Nodemon for auto-restarts.

        Set up Git for version control.


⚙️ Steps Done
Server Setup

    Used http.createServer() and server.listen(port) correctly.

    Added routes for Home, Login, and 404.

-------------------------------------------------------------------------------------

Git

    Initialized repo, added files, configured username/email.

    Committed and pushed to origin/main.

------------------------------------------------------------------------------------

NPM & Nodemon

    Ran npm init -y to create package.json.

    Installed Nodemon locally and globally.

    Used Nodemon to auto-restart server on file changes.

------------------------------------------------------------------------------------
🚀 Run Instructions
bash
    # Start normally
    node multiplePages.js

    # Start with Nodemon
    nodemon multiplePages.js
    Visit:

    http://localhost:3000/ → Home

    http://localhost:3000/home → Home

    http://localhost:3000/login → Login

    Any other route → 404

------------------------------------------------------------------------------------
📂 Structure
Code
    TT_04-03/
    │── firstServer.js
    │── multiplePages.js
    │── package.json
    🔄 Nodemon Demo
    Installed globally: npm install -g nodemon

    Run: nodemon multiplePages.js

    On file changes, Nodemon restarts automatically:

------------------------------------------------------------------------------------
Code
    [nodemon] restarting due to changes...
    Server is running on port 3000


------------------------------------------------------------------------------------


📌 Steps
Import modules

js
const http = require("http");
const fs = require("fs");
http → to create the server

fs → to read files

Set port

js
const port = 3000;
Create server

js
const server = http.createServer((req, res) => {
    fs.readFile("readme.txt", "UTF-8", (err, data) => {
        if (err) {
            res.end("<h1>Error</h1>");
            return;
        }
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>File Content from server: " + data + "</h2>");
        res.end();
    });
});
Reads readme.txt

If error → shows <h1>Error</h1>

If success → displays file content in HTML

Start server

js
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
🚀 Run
bash
    node fileServer.js
------------------------------------------------------------------------------------