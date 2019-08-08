module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define('club', {
        team_id: {
            type: Sequelize.UUID
        },
        club_id: {
            type: Sequelize.UUID
        },
        Category: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
    });
    Club.associate = function(models) {
        Club.hasMany(models.courts,{
            foreignKey: 'club_id',
        });
    };

    return Club;
}