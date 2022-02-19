function bodyParser(req,callback) {
    let body = '';
    
    req.on('data', (chunk) => {
        body += chunk;
    })

    req.on('end', () => {
        body = JSON.parse(body);
        req.body = body;

        return callback();
    })
}

module.exports = bodyParser;