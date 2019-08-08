const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {	
	// Save to MariaDB database
	User.create({
		name: req.body.name,
		lastname: req.body.lastname,
		email: req.body.email,
		phone: req.body.phone,
		password: req.body.password,
		birthdate: req.body.birthdate,
		user_active: req.body.user_active,
		last_connection: req.body.last_connection,
		photo: req.body.photo,
		address: req.body.address
		})
		.then(user => {		
			// Send created customer to client
			res.json(user);
		})
		.catch(error => res.status(400).send(error))
};
// Fetch all Users
exports.findAll = (req, res) => {
	User.findAll({
	})
		.then(users => {
			res.json(users);
		})
		.catch(error => res.status(400).send(error))
};

// Find a User by Pk
exports.findByPk = (req, res) => {
	User.findByPk(req.params.userId,
		{attributes: { exclude: ["createdAt", "updatedAt"] }}
	)
		.then(user => {
				if (!user){
					return res.status(404).json({message: "User Not Found"})
				}
				return res.status(200).json(user)
			}
		)
		.catch(error => res.status(400).send(error));
};
