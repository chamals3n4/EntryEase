const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Job = db.define("job", {
  job_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // salary: {
  //   type: DataTypes.TEXT, // 999.99 0.99 123.99
  //   allowNull: true,
  // },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  company_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  company_contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Job;
