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
        const { body } = req;
        const lastId = users[users.length-1].id;
        const newUser = {
            id: lastId+1,
            name: body.name
        }
        users.push(newUser);
        res.writeHead(200,'Content-Type','application/json');
        return res.end(JSON.stringify(users));
    },
    updateUser(req,res) {
        const {body} = req;
        const user = users.find((user) => user.id === Number(req.params.id));
        if(!user) {
            res.writeHead(400,'Content-Type','application/json');
            return res.end(JSON.stringify({error: 'User not found'}));
        } else {
            res.writeHead(200,'Content-Type','application/json');
            const index = users.indexOf(user);
            const updateUser = {
                id: user.id,
                name: body.name
            }
            users.splice(index,1,updateUser);
            return res.end(JSON.stringify(users));
        }  
    },
    deleteUserById(req,res) {
        const user = users.find((user) => user.id === Number(req.params.id));
        if(!user) {
            res.writeHead(400,'Content-Type','application/json');
            return res.end(JSON.stringify({error: 'User not found'}));
        } else {
            res.writeHead(200,'Content-Type','application/json');
            const index = users.indexOf(user);
            users.splice(index,1);
            return res.end(JSON.stringify(users));
        }  
    }
}