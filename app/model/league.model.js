module.exports = (sequelize, Sequelize) => {
    const League = sequelize.define('league', {
        name: {
            type: Sequelize.STRING
        }
    });
    return League;
}