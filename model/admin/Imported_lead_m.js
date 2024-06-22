import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Employee from './employe_m.js'; // Import the Employee model

const I_Lead = sequelize.define(
  'I_Lead',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    proxy_id: {
      type: DataTypes.INTEGER,
    },

    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyMobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true, // Example validation for numeric mobile numbers
      },
    },
    whatsappNumber: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    companyCategory: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
   
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
  
    employeeId: { // Changed from 'employeeName'
      type: DataTypes.INTEGER, // Assuming it's referencing the ID of the employee
      allowNull: false,
    },
    callDate: {
      type: DataTypes.DATEONLY,
    },
    callTime: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
    tableName: 'i_lead',
  }
);

Employee.hasMany(I_Lead, { foreignKey: 'employeeId' });
I_Lead.belongsTo(Employee, { foreignKey: 'employeeId' });

(async () => {
  await I_Lead.sync(); // Renamed from 'Customers'
})();

export default I_Lead; // Renamed from 'Customers'
