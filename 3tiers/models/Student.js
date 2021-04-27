const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'mysql://root:password@127.0.0.1:3310/archi', { logging: false });

const Student = sequelize.define('Student', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.TINYINT
  }
}, { tableName: 'student', freezeTableName: true });

module.exports = { Student, sequelize };