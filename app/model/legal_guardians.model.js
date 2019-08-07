module.exports = (sequelize, Sequelize) => {
    const Legal_guardians = sequelize.define('legal_guardians', {
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
        address: {
            type: Sequelize.TEXT
        },
        dni: {
            type: Sequelize.STRING
        }
    });
    Legal_guardians.associate = function(models) {
        Legal_guardians.belongsTo(models.user,);
    };

    return Legal_guardians;

}