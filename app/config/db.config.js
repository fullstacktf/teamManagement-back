const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../model/user.model')(sequelize, Sequelize);
db.legalguardians = require('../model/legalGuardians.model')(sequelize, Sequelize);
db.teams = require('../model/team.model')(sequelize, Sequelize);
db.players = require('../model/player.model')(sequelize, Sequelize);

module.exports = db;