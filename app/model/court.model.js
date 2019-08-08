module.exports = (sequelize, Sequelize) => {
    const Court = sequelize.define('court', {
        club_id: {
            type: Sequelize.UUID
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        }
    });
    Court.associate = function(models) {
        Court.belongsTo(models.club,{
            foreignKey: 'club_id',
        });
    };
    return Club;
}