import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../connection/db.js";
import Category from './category_m.js';
import Service from './service_m.js';

const Subservice = sequelize.define('Subservice', {
    subservice_name: {
        type: DataTypes.STRING
    },

    charges: {
        type: DataTypes.TEXT
    },

    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Category',
            key: 'id'
        }
    },
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Service',
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    tableName: 'subservice'
});

// Define associations after defining all models
Category.hasMany(Subservice, { foreignKey: 'category_id' });
Subservice.belongsTo(Category, { foreignKey: 'category_id' });

Service.hasMany(Subservice, { foreignKey: 'service_id' });
Subservice.belongsTo(Service, { foreignKey: 'service_id' });

(async () => {
    await Subservice.sync(); 
})();

export default Subservice;
