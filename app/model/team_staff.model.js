module.exports = (sequelize, Sequelize) => {
    const Team_Staff = sequelize.define('team_Staff', {
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
        }
    });

    return Team_Staff;
}