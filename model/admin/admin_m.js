import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const Admin = sequelize.define(
  'admin',
  {
    admin_name: {
      type: DataTypes.STRING
    },

    profile_photo: {
      type: DataTypes.STRING
    },

    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    designation: {
      type: DataTypes.STRING
    },

  },
  {
    freezeTableName: true,
    tableName: 'admin'
  }
);

(async () => {
  await Admin.sync(); 
})();

export default Admin;
