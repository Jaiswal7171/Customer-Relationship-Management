import multer from 'multer';

// Gallery storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/gallery');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the filename format
    }
});

const gallery = multer({ storage });








const occasionImages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/occasion_images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the filename format
    }
});

const occasionGallery = multer({ storage: occasionImages });



// 

// Configure multer for storing employee profile photos
const employeePhoto = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/employeeProfile');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const uploadEmployeeProfile = multer({ storage: employeePhoto });











  
// EventsGallery storage configuration
const eventsGalleryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/EventsGallery');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the filename format
    }
});

const EventGallery = multer({ storage: eventsGalleryStorage });
const multipleevent = EventGallery.array('image', 10);





export  { gallery, multipleevent , occasionGallery , uploadEmployeeProfile };
