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
			password: {
				type: Sequelize.STRING
			},
			birthdate: {
				type: Sequelize.DATEONLY
			},
			user_active: {
				type: Sequelize.BOOLEAN
			},
			knowns_ips: {
				type: Sequelize.ARRAY
			},
			last_connection: {
				type: Sequelize.DATE
			},
			photo: {
				type: Sequelize.VARCHAR
			},
			user_history: {
				type: Sequelize.ARRAY
			},
			address: {
				type: Sequelize.TEXT
			}
		});

		return User;

}