import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../connection/db.js";
import Employee from './employe_m.js'; // Import the Employee model

const Target = sequelize.define('Target', {

    target: {
        type: DataTypes.TEXT
    },
    targate_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    description: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.TEXT
    },
    employeeID: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'targets'
});

Employee.hasMany(Target, { foreignKey: 'employeeID' });
Target.belongsTo(Employee, { foreignKey: 'employeeID' });

(async () => {
    await Target.sync(); 
})();

export default Target;
