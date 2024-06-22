import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const DailyWork = sequelize.define(
  'dailyWork',
  {
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false // Example of adding a validation
    },
    work_Date: {
      type: DataTypes.DATE,
      unique: true
    },
    task_heading: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    taskStartDate: {
      type: DataTypes.DATE
    },
    deadline_date: {
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    tableName: 'dailyWork'
  }
);

(async () => {
  await DailyWork.sync(); 
})();

export default DailyWork;
