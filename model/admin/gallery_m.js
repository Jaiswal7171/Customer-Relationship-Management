import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const Gallery = sequelize.define(
  'Gallery',
  {
    image: {
      type: DataTypes.STRING
    },
  },
  {

    tableName: 'gallery'
  }
);

(async () => {
  await Gallery.sync(); 
})();

export default Gallery;
