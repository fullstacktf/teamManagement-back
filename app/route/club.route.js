module.exports = function(app) {
    const Club = require('../controller/club.controller');

    //Create a new Club
    app.post('/api/v1/clubs/create', Club.create);

    //Retrieve all Clubs
    app.get('/api/v1/clubs/', Club.findAll);

    // Retrieve a single Club by Id
    app.get('/api/v1/clubs/:clubId', Club.findByPk);

    // Update a Club with Id
    app.put('/api/v1/clubs/:clubId', Club.update);

    // Delete a Club with Id
    app.delete('/api/v1/clubs/:clubId', Club.delete)
}