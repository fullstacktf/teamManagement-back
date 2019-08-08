module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
			user_id: {
				type: Sequelize.UUID
			},
    		name: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			phone: {
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
				type: Sequelize.STRING
			},
			last_connection: {
				type: Sequelize.DATE
			},
			photo: {
				type: Sequelize.STRING
			},
			user_history: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.TEXT
			}
		});
    	User.associate = function(models) {
			User.hasMany(models.legal_guardians,{
				foreignKey: 'user_id',
			});
		};

		return User;
}