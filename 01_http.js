const http = require("http")

const port = 3000;
const hostname = "localhost"
const date = new Date();

const server = http.createServer((req, res) => {
    res.statusCode=200;

    if (req.url === "/hello") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello, World!"); 
    } else if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({date: date.toISOString()}));
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"} );
        res.end("Page not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});