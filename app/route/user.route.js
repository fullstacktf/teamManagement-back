module.exports = function(app) {
    const users = require('../controller/user.controller');

    //Create a new User
    app.post('/api/v1/users/create', users.create);
    
    //Retrieve all users
    app.get('/api/v1/users', users.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/v1/users/:userId', users.findById);

    // Update a Customer with Id
    app.put('/api/v1/users/:userId', users.update);

    // Delete a Customer with Id
    app.delete('/api/v1/users/:usersId', users.delete)
}