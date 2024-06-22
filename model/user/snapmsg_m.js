import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Employee from '../admin/employe_m.js';


const SnapMessage = sequelize.define(
  'SnapMessage',
  {
    message: {
      type: DataTypes.TEXT,
    },

    employee_id :{
      type :DataTypes.INTEGER
    }

  },
  {

    tableName: 'snapMessage'
  }
);

Employee.hasMany(SnapMessage, { foreignKey: 'employee_id' });
SnapMessage.belongsTo(Employee, { foreignKey: 'employee_id' });

(async () => {
  await SnapMessage.sync(); 
})();

export default SnapMessage;
