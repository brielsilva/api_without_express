const http = require('http');
const {URL} = require('url');

const routes = require('./routes.js');
function error404(req,res) {
    res.writeHead(404, 'Content-Type','text/html');
    return res.end('<h1>404 Not Found</h1>')
}

const server = http.createServer((req,res) => {
    const host = req.headers.host;
    const protocol = 'http'
    const parsedUrl = new URL(`${protocol}://${host}${req.url}`);
    console.log(parsedUrl);
    const route = routes.find((route) => {
        return route.endpoint === parsedUrl.pathname && route.method === req.method;
    })
    if(route) {
        req.query = Object.fromEntries(parsedUrl.searchParams);
        console.log(req.query);
        return route.handler(req,res);
    } else {
        return error404(req,res)
    }

});

server.listen(4000, () => {
    console.log('Escutando')
})