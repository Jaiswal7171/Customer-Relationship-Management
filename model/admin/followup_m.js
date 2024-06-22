import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';
import Employee from './employe_m.js';
import Customer from './customers_m.js';

const FollowUp = sequelize.define(
  'followUp',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    followup_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    tableName: 'followUp'
  }
);

Employee.hasMany(FollowUp, { foreignKey: 'employee_id' });
FollowUp.belongsTo(Employee, { foreignKey: 'employee_id' });

Customer.hasMany(FollowUp, { foreignKey: 'customer_id' });
FollowUp.belongsTo(Customer, { foreignKey: 'customer_id' });

(async () => {
  await FollowUp.sync({ alter: true });
})();

export default FollowUp;