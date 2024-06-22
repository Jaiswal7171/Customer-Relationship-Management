import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const Occasiongallery = sequelize.define(
  'Occasiongallery',
  {
    image: {
      type: DataTypes.STRING
    },
  },
  {

    tableName: 'occasion_gallery'
  }
);

(async () => {
  await Occasiongallery.sync(); 
})();

export default Occasiongallery;
