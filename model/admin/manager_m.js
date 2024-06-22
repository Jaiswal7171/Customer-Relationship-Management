import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const Manager = sequelize.define(
  'Manager',
  {
    manager_name: {
      type: DataTypes.STRING,
      // unique: true // Ensuring email is unique
    },
    category_name: {
      type: DataTypes.STRING,
      // unique: true // Ensuring email is unique
    },

    team_name: {
      type: DataTypes.STRING,
      // unique: true // Ensuring email is unique
    },
  
  },
  {
    freezeTableName: true,
    tableName: 'managers'
  }
);

(async () => {
  await Manager.sync(); 
})();

export default Manager;
