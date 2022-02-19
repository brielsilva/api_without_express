const users = require('../mocks/users');

module.exports = {
    listUsers(req,res) {
        res.writeHead(200,'Content-Type','application/json');
        return res.end(JSON.stringify(users));
    },
    getUserById(req,res) {
        res.writeHead(200,'Content-Type','application/json');
        const result = users.filter((user) => user.id == req.params.id);
        return res.end(JSON.stringify(result[0]));
    }
}