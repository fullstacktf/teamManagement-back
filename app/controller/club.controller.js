const db = require('../config/db.config.js');
const Club = db.club;

// Post a Club
exports.create = (req, res) => {
    // Save to MariaDB database
    Club.create({
        name: req.body.name,
    })
        .then(user => {
            // Send created customer to client
            res.json(user);
        })
        .catch(error => res.status(400).send(error))
};