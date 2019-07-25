module.exports = function(app) {
    const teams = require('../controller/team.controller');

    //Create a new User
    app.post('/api/v1/teams/create', teams.create);

    //Retrieve all users
    app.get('/api/v1/teams', teams.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/v1/teams/:teamId', teams.findByPk);

    // Update a Customer with Id
    app.put('/api/v1/teams/:teamId', teams.update);

    // Delete a Customer with Id
    app.delete('/api/v1/teams/:teamId', teams.delete)
}