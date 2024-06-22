import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';


const Task = sequelize.define(
  'Task',
  {
    description: {
      type: DataTypes.STRING,
      // unique: true
    },

  },
  {

    tableName: 'employee_task'
  }
);


(async () => {
  await Task.sync(); 
})();

export default Task;
