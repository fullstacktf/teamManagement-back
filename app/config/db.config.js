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
db.legal_guardians = require('../model/legal_guardians.model')(sequelize, Sequelize);
db.club = require('../model/club.model')(sequelize, Sequelize);
db.court = require('../model/court.model')(sequelize, Sequelize);
db.team = require('../model/team_model')(sequelize, Sequelize);
db.team_staff = require('../model/team_staff.model')(sequelize, Sequelize);

module.exports = db;