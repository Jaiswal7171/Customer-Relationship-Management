import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../connection/db.js";
import Employee from './employe_m.js'; // Import the Employee model

const Email = sequelize.define('Email', {

    from: {
        type: DataTypes.TEXT
    },
    employeeID: {
        type: DataTypes.INTEGER
    },
    subject: {
        type: DataTypes.TEXT
    },
    message: {
        type: DataTypes.TEXT

    },
    attachement: {
        type: DataTypes.TEXT
    },

}, {
    tableName: 'email'
});

Employee.hasMany(Email, { foreignKey: 'employeeID' });
Email.belongsTo(Employee, { foreignKey: 'employeeID' });

(async () => {
    await Email.sync(); 
})();

export default Email;
