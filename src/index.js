const http = require('http');

const users = [
    {
        "id": 1,
        "name": "Gabriel"
    },
    {
        "id": 2,
        "name": "Gabriel2"
    },
    {
        "id": 3,
        "name": "Gabriel3"
    }
]

const server = http.createServer((req,res) => {
    if(req.url == "/users" && req.method == "GET") {
        res.writeHead(200,'Content-Type','application/json');
        return res.end(JSON.stringify(users));
    } else if (req.url == '/') {
        res.writeHead(200,'Content-Type','text/html');
        return res.end('<h1>Hello World</h1>')
    }
    else {
        res.writeHead(404,'Content-Type','application/json');
        res.end('<h1>404</h1>')
    }
    
});

server.listen(4000, () => {
    console.log('Escutando')
})