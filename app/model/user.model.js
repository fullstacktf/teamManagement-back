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
				type: Sequelize.JSON
			},
			last_connection: {
				type: Sequelize.DATE
			},
			photo: {
				type: Sequelize.STRING
			},
			user_history: {
				type: Sequelize.JSON
			},
			address: {
				type: Sequelize.TEXT
			}
		});
    	User.associate = function(models) {
			User.hasMany(models.legal_guardians,{

			});
		};

		return User;

}