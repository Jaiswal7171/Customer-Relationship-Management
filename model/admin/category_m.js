import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const Category = sequelize.define(
  'Category',
  {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    category_name: {
      type: DataTypes.STRING
    },
 
  },
  {

    tableName: 'category'
  }
);

(async () => {
  await Category.sync(); 
})();

export default Category;
