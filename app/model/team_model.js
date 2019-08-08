module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define('team', {
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
        first_coach: {
            type: Sequelize.INTEGER
        }
        second_coach: {
            type: Sequelize.INTEGER
        },
        physical_trainer: {
            type: Sequelize.INTEGER
        }

    });
    Team.associate = function(models) {
        Team.belongsTo(models.club,{
            foreignKey: 'club_id',
        });
    };

    return Team;
}