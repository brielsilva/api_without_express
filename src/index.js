const http = require('http');
const {URL} = require('url');
const bodyParser = require('./helpers/bodyParser.js');

const routes = require('./routes.js');
function error404(req,res) {
    res.writeHead(404, 'Content-Type','text/html');
    return res.end('<h1>404 Not Found</h1>')
}

const server = http.createServer((req,res) => {
    const host = req.headers.host;
    const protocol = 'http'
    const parsedUrl = new URL(`${protocol}://${host}${req.url}`);
    let pathname = parsedUrl.pathname;
    const splitEndpoint = pathname.split('/').filter(Boolean);
    let id = null;
    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
    }
    const route = routes.find((route) => {
        console.log(route.endpoint === pathname && route.method === req.method);
        return route.endpoint === pathname && route.method === req.method;
    })
    if(route) {
        req.query = Object.fromEntries(parsedUrl.searchParams);
        req.params = { id }
        if(['POST','PUT','PATCH'].includes(route.method)) {
            return bodyParser(req, () => route.handler(req,res));
        } else {
            return route.handler(req,res);
        }
    } else {
        return error404(req,res)
    }

});


server.listen(4000, () => {
    console.log('Escutando')
})