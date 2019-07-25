module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
			name: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			passwd: {
				type: Sequelize.STRING
			},
			birthdate: {
				type: Sequelize.DATEONLY
			},
			active: {
				type: Sequelize.BOOLEAN
			},
			last_login: {
				type: Sequelize.DATE
			},
			legal_guardians: {
				type: Sequelize.STRING
			},
			main_guardian: {
				type: Sequelize.INTEGER
			},
			profile_photo: {
				type: Sequelize.STRING
			},
			type_of_user: {
				type: Sequelize.INTEGER                     
			}
		});

		return User;

}