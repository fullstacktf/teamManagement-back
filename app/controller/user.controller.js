const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {	
	// Save to MariaDB database
	User.create({  
			name: req.body.name,
			lastname: req.body.lastname,
			email: req.body.email,
			passwd: req.body.passwd,
			birthdate: req.body.birthdate,
			active: req.body.active,
			last_login: req.body.last_login,
			legal_guardians: req.body.legal_guardians,
			main_guardian: req.body.main_guardian,
			profile_photo: req.body.profile_photo,
			type_of_user: req.body.type_of_user
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
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(users => {
			res.json(users);
		})
		.catch(error => res.status(400).send(error))
};

// Find a User by Id
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

// Update a User
exports.update = (req, res) => {
	return User.findByPk(req.params.userId)
		.then(
			user => {
				if(!user){
					return res.status(404).json({
						message: 'User Not Found',
					});
				}
				return user.update({
										name: req.body.name,
										age: req.body.age
									})
									.then(() => res.status(200).json(user))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};


// Delete a User by Id
exports.delete = (req, res) => {
	return User
					.findByPk(req.params.userId)
					.then(user => {
						if(!user) {
							return res.status(400).send({
								message: 'User Not Found',
							});
						}
						return user.destroy()
														.then(() => res.status(200).json({message: "Destroy successfully!"}))
														.catch(error => res.status(400).send(error));
					})
					.catch(error => res.status(400).send(error));
};