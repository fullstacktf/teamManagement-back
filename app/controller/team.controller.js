const db = require('../config/db.config.js');
const Team = db.teams;

//post a Team
exports.create = (req, res) => {
    // Save to MYSQL
    Team.create({
        name: req.body.name,
        club: req.body.club,
        category: req.body.club,
        profile_photo: req.body.profile_photo,
        header_photo: req.body.header_photo
    })
        .then(team => {
            //Send Created customer to Client
            res.json(team);
        })
        .catch(error => res.status(400).send(error));
};

//Fetch all Teams
exports.findAll = (req, res) => {
    Team.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
        .then(teams => {
            res.json(teams);
        })
        .catch(error => res.status(400).send(error))
};

// Find a Team by Pk
exports.findByPk = (req, res) => {
    Team.findByPk(req.params.teamId,
        {attributes: { exclude: ["createdAt", "updatedAt"] }}
    )
        .then(team => {
                if (!team){
                    return res.status(404).json({message: "team Not Found"})
                }
                return res.status(200).json(team)
            }
        )
        .catch(error => res.status(400).send(error));
};

// Update a Team
exports.update = (req, res) => {
    return Team.findByPk(req.params.teamId)
        .then(
            team => {
                if(!team){
                    return res.status(404).json({
                        message: 'team Not Found',
                    });
                }
                return Team.update({
                    name: req.body.name,
                    club: req.body.club,
                    category: req.body.club,
                    profile_photo: req.body.profile_photo,
                    header_photo: req.body.header_photo
                })
                    .then(() => res.status(200).json(team))
                    .catch((error) => res.status(400).send(error));
            }
        )
        .catch((error) => res.status(400).send(error));
};

// Delete a LegalGuardian by Id
exports.delete = (req, res) => {
    return Team
        .findByPk(req.params.teamId)
        .then(team => {
            if(!team) {
                return res.status(400).send({
                    message: 'team Not Found',
                });
            }

            return Team.destroy()
                .then(() => res.status(200).json({message: "Destroy successfully!"}))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};