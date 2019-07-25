module.exports = function(app) {
    const legalGuardians = require('../controller/legalGuardians.controller');

    //Create a new legalGuardian
    app.post('/api/v1/legalGuardians/create', legalGuardians.create);
    
    //Retrieve all legalGuardians
    app.get('/api/v1/legalGuardians', legalGuardians.findAll);

    // Retrieve a single legalGuardian by Id
    app.get('/api/v1/legalGuardians/:legalGuardiansId', legalGuardians.findById);

    // Update a legalGuardians with Id
    app.put('/api/v1/legalGuardians/:legalGuardiansId', legalGuardians.update);

    // Delete a legalGuardians with Id
    app.delete('/api/v1/legalGuardians/:legalGuardiansId', legalGuardians.delete)
}