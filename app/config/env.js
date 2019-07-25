const env = {
  database: 'crewManager',
  username: 'admin',
  password: 'hola_me_llamo_ralph',
  host: 'atanor.dev',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;