const Sequelize = require('sequelize');

const conf_db_host = 'localhost',
conf_db_name = 'data_werehouse',
conf_user = 'root',
conf_password = '',
conf_port = '3306'

// const path = 'mysql://root@localhost:3306/data_werehouse';
const path = `mysql://${conf_user}@${conf_db_host}:${conf_port}/${conf_db_name}`
const sequelize = new Sequelize(path, {operatorsAliases:0});

// sequelize.authenticate().then(()=>{
//     console.log('DB connected');
// }).catch(err =>{
//     console.log('Error ',err);
// });

module.exports = sequelize;



