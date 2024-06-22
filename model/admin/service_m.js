import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../connection/db.js";
import Category from './category_m.js';

const Service = sequelize.define('Service', {
    service_name: {
        type: DataTypes.STRING
    },
    // Define category_id as a foreign key
    category_id: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true,
    tableName: 'service'
});

// Define associations after defining all models
Category.hasMany(Service, { foreignKey: 'category_id' });
Service.belongsTo(Category, { foreignKey: 'category_id' });

(async () => {
    await Service.sync(); 
})();

export default Service;
