module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define('club', {
        club_id: {
            type: Sequelize.UUID
        },
        name: {
            type: Sequelize.STRING
        },
    });
    User.associate = function(models) {
        User.hasMany(models.legal_guardians,{
            foreignKey: 'user_id',
        });
    };

    return Club;
}