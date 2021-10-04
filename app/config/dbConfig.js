import { Sequelize } from "sequelize";

const config = {
  host: 'localhost',
  port: 3306,
  database: 'test',
  user: 'root',
  password: ''
};

const db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',        /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  port: config.port,
  //logging: false,
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

//module.exports = sequelize;
export default db;