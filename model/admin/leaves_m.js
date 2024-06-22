import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../connection/db.js";
import Employee from './employe_m.js'; // Import the Employee model

const Leaves = sequelize.define('Leaves', {

    leave_reason: {
        type: DataTypes.STRING
    },
    leave_description: {
        type: DataTypes.TEXT
    },
    leave_start_date: {
        type: DataTypes.DATE
    },
    leave_end_date: {
        type: DataTypes.DATE
    },

    total_leaves: {
        type: DataTypes.INTEGER
    },


    employee_id: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'leaves'
});

Employee.hasMany(Leaves, { foreignKey: 'employee_id' });
Leaves.belongsTo(Employee, { foreignKey: 'employee_id' });

(async () => {
    await Leaves.sync(); 
})();

export default Leaves;
