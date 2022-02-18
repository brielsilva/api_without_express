module.exports = {
    home(req,res) {
        res.writeHead(200,'Content-Type','text/html');
        return res.end('<h1>Hello World</h1>');
    }
}