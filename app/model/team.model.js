module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define('team', {
        name: {
            type: Sequelize.STRING
        },
        club: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        profile_photo: {
            type: Sequelize.STRING
        },
        header_photo: {
            type: Sequelize.STRING
        }
    });
    return Team;
}