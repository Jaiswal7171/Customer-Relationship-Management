import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Employee from './employe_m.js'; // Import the Employee model

const Customer = sequelize.define(
  'Customer',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    d_id: {
      type: DataTypes.INTEGER,
      null :true,
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
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true, // Example validation for numeric mobile numbers
      },
    },


    companyCategory: {
      type: DataTypes.STRING,
    },

    
    email: {
      type: DataTypes.STRING,
      unique: true, // Make the email field unique
   
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
  
    employeeId: { 
      type: DataTypes.INTEGER, 
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
    tableName: 'customers',
    timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt automatically
  }
);

Employee.hasMany(Customer, { foreignKey: 'employeeId' });
Customer.belongsTo(Employee, { foreignKey: 'employeeId' });

(async () => {
  await Customer.sync(); // Renamed from 'Customers'
})();

export default Customer; // Renamed from 'Customers'
