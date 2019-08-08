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