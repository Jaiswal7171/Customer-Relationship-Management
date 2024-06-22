import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const Clients = sequelize.define('Clients', {
  client_name: {
    type: DataTypes.STRING
  },

  company_name: {
    type: DataTypes.STRING
  },


  email: {
    type: DataTypes.STRING,
    unique: true
  },
  phone: {
    type: DataTypes.STRING
  },
  whatsapp_no: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },

  category_name: {
    type: DataTypes.STRING
  },


  service_category: {
    type: DataTypes.STRING
  },

  service: {
    type: DataTypes.STRING
  }

}, 
{
  tableName: 'clients'
});

(async () => {
  await Clients.sync(); 
})();

export default Clients;
