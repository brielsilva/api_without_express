const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController');

module.exports = [
    {
        'endpoint': '/users',
        'method': 'GET',
        'handler': UserController.listUsers
    },
    {
        'endpoint': '/',
        'method': 'GET',
        'handler': HomeController.home
    }
]