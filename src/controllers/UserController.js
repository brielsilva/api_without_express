const users = require('../mocks/users');

module.exports = {
    listUsers(req,res) {
        res.writeHead(200,'Content-Type','application/json');
        return res.end(JSON.stringify(users));
    },
    getUserById(req,res) {
        const user = users.find((user) => user.id === Number(req.params.id));
        if(!user) {
            res.writeHead(400,'Content-Type','application/json');
            return res.end(JSON.stringify({error: 'User not found'}));
        } else {
            res.writeHead(200,'Content-Type','application/json');
            return res.end(JSON.stringify(user));
        }
    },
    newUser(req,res) {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            body = JSON.parse(body);
            const lastId = users[users.length-1].id;
            const newUser = {
                id: lastId+1,
                name: body.name
            }
            console.log(body);
            res.writeHead(200,'Content-Type','application/json');
            users.push(newUser);
            return res.end(JSON.stringify(users));
        })
    }
}