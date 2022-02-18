const { NOTFOUND } = require('dns');
const http = require('http');

const routes = require('./routes.js');
function error404(req,res) {
    res.writeHead(404, 'Content-Type','text/html');
    return res.end('<h1>404 Not Found</h1>')
}

const server = http.createServer((req,res) => {
    const route = routes.find((route) => {
        return route.endpoint === req.url && route.method === req.method;
    })
    if(route) {
        return route.handler(req,res);
    } else {
        return error404(req,res)
    }

});

server.listen(4000, () => {
    console.log('Escutando')
})