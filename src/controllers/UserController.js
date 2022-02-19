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
    }
}