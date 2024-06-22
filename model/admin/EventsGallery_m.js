import { DataTypes } from 'sequelize';
import sequelize from '../../connection/db.js';

const EventsGallery = sequelize.define(
  'EventsGallery',
  {
    image: {
      type: DataTypes.STRING
    },
  },
  {

    tableName: 'events_gallery'
  }
);

(async () => {
  await EventsGallery.sync(); 
})();

export default EventsGallery;
