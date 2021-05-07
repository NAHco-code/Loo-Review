const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {

    sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
    );
}

module.exports = sequelize;

// mysql://fmx93b1rtuvg53uy:htxki9jzdtntywe2@wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rb3r1cxfg3wbmtzt
