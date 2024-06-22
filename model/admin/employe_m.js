import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Manager from './manager_m.js';

const Employee = sequelize.define(
  'Employee',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type: DataTypes.TEXT
    },
    portfolio_link: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
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
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    managerid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'employee'
  }
);

// Define the relationship between Manager and Employee
Manager.hasMany(Employee, { foreignKey: 'managerid' });
Employee.belongsTo(Manager, { foreignKey: 'managerid' });

// Sync the model with the database during initialization (if needed)
(async () => {
  await Employee.sync({ alter: true });
})();

export default Employee;
