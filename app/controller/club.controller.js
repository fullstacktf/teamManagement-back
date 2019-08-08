const db = require('../config/db.config.js');
const Club = db.club;

// Post a Club
exports.create = (req, res) => {
    // Save to MariaDB database
    Club.create({
        name: req.body.name,
    })
        .then(club => {
            // Send created club to client
            res.json(club);
        })
        .catch(error => res.status(400).send(error))
};

// Fetch all Clubs
exports.findAll = (req, res) => {
    Club.findAll({
    })
        .then(clubs => {
            res.json(clubs);
        })
        .catch(error => res.status(400).send(error))
};

