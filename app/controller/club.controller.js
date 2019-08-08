const db = require('../config/db.config.js');
const Club = db.club;

exports.create = (req, res) => {
    Club.create({
        name: req.body.name,
    })
        .then(club => {
            res.json(club);
        })
        .catch(error => res.status(400).send(error))
};

exports.findAll = (req, res) => {
    Club.findAll({
    })
        .then(clubs => {
            res.json(clubs);
        })
        .catch(error => res.status(400).send(error))
};

exports.findByPk = (req, res) => {
    Club.findByPk(req.params.clubID,
    )
        .then(club => {
                if (!club){
                    return res.status(404).json({message: "Club Not Found"})
                }
                return res.status(200).json(club)
            }
        )
        .catch(error => res.status(400).send(error));
};

exports.update = (req, res) => {
    return Club.findByPk(req.params.clubId)
        .then(
            club => {
                if(!club){
                    return res.status(404).json({
                        message: 'Club Not Found',
                    });
                }
                return club.update({
                    name: req.body.name,
                })
                    .then(() => res.status(200).json(club))
                    .catch((error) => res.status(400).send(error));
            }
        )
        .catch((error) => res.status(400).send(error));
};

exports.delete = (req, res) => {
    return Club
        .findByPk(req.params.clubId)
        .then(club => {
            if(!club) {
                return res.status(400).send({
                    message: 'Club Not Found',
                });
            }
            return club.destroy()
                .then(() => res.status(200).json({message: "Destroy successfully!"}))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};