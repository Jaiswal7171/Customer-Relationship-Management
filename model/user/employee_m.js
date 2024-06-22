import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Manager from './manager_m.js';

const Employee = sequelize.define(
  'Employee',
  {
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      // unique: true
    },

    experince: {
      type: DataTypes.STRING,
      // unique: true
    },

    company_email: {
      type: DataTypes.STRING,
      // unique: true
    },


    portfolio_link: {
      type: DataTypes.STRING,
      // unique: true
    },


    gender: {
      type: DataTypes.STRING,
      // unique: true
    },


 

    designation: {
      type: DataTypes.STRING
    },
    qualification: {
      type: DataTypes.STRING
    },
    experience_letter: {
      type: DataTypes.TEXT
    },
    adhar_card_image: {
      type: DataTypes.TEXT
    },
    profile_photo: {
      type: DataTypes.TEXT
    },
    pan_card: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING(20)
    },
    whatsapp_no: {
      type: DataTypes.STRING(20)
    },
    address: {
      type: DataTypes.STRING
    },
    managerid: { // New column for manager's ID
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    tableName: 'employee'
  }
);

Manager.hasMany(Employee, { foreignKey: 'managerid' });
Employee.belongsTo(Manager, { foreignKey: 'managerid' });

(async () => {
  await Employee.sync(); 
})();

export default Employee;
