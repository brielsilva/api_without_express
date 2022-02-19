const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController');

module.exports = [
    {
        'endpoint': '/users',
        'method': 'GET',
        'handler': UserController.listUsers
    },
    {
        'endpoint': '/users/:id',
        'method': 'GET',
        'handler': UserController.getUserById
    },
    {
        'endpoint': '/',
        'method': 'GET',
        'handler': HomeController.home
    },
    {
        'endpoint': '/users',
        'method': 'POST',
        'handler': UserController.newUser
    },
    {
        'endpoint': '/users/:id',
        'method': 'PUT',
        'handler': UserController.updateUser
    }
]