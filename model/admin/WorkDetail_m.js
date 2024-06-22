import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Employee from './employe_m.js'; // Import the Employee model

const WorkDetail = sequelize.define(
  'WorkDetail',
  {
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TaskName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employee', // Name of the table
        key: 'id' // Primary key in the Employee table
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectAssignDate: {
      type: DataTypes.DATE,
    },
    DeliveryDate: {
      type: DataTypes.DATE,
    }
  },
  {
    freezeTableName: true,
    tableName: 'workDetail'
  }
);

// Define associations after defining all models
Employee.hasOne(WorkDetail, { foreignKey: 'employeeId' });
WorkDetail.belongsTo(Employee, { foreignKey: 'employeeId' });

(async () => {
  await sequelize.sync(); // Sync all defined models
})();

export default WorkDetail;
