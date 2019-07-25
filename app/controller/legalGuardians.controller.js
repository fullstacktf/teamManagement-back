const db = require('../config/db.config.js');
const LegalGuardians = db.legalGuardians;

//post a LegalGuardians
exports.create = (req, res) => {
    // Save to MYSQL
    LegalGuardians.create({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        nif: req.body.nif
    })
    .then(legalGuardian => {
        //Send Created customer to Client
        res.json(legalGuardian);
    })
    .catch(error => res.status(400).send(error));
};

//Fetch all LegalGuardians
exports.findAll = (req, res) => {
	LegalGuardians.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(legalGuardian => {
			res.json(legalGuardian);
		})
		.catch(error => res.status(400).send(error))
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	LegalGuardians.findById(req.params.legalGuardiansId,
				{attributes: { exclude: ["createdAt", "updatedAt"] }}
			)
			.then(legalGuardian => {
					if (!legalGuardian){
						return res.status(404).json({message: "Legal guardian Not Found"})
					}
					return res.status(200).json(legalGuardian)
				}
			)
			.catch(error => res.status(400).send(error));
};

// Update a LegalGuardians
exports.update = (req, res) => {
	return LegalGuardians.findById(req.params.legalGuardiansId)
		.then(
			legalGuardian => {
				if(!legalGuardian){
					return res.status(404).json({
						message: 'legalGuardians Not Found',
					});
				}
				return legalGuardian.update({
                                        name: req.body.name,
                                        lastname: req.body.lastname,
                                        email: req.body.email,
                                        phone_number: req.body.phone_number,
                                        address: req.body.address,
                                        nif: req.body.nif
									})
									.then(() => res.status(200).json(customer))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	return Customer
					.findById(req.params.customerId)
					.then(customer => {
						if(!customer) {
							return res.status(400).send({
								message: 'Customer Not Found',
							});
						}

						return customer.destroy()
														.then(() => res.status(200).json({message: "Destroy successfully!"}))
														.catch(error => res.status(400).send(error));
					})
					.catch(error => res.status(400).send(error));
};