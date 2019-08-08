module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define('club', {
        club_id: {
            type: Sequelize.UUID
        },
        name: {
            type: Sequelize.STRING
        },
    });
    Club.associate = function(models) {
        Club.hasMany(models.courts,{
            foreignKey: 'club_id',
        });
        Club.hasMany(models.teams,{
            foreignKey: 'club_id',
        });
    };

    return Club;
}