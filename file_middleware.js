import multer from 'multer';

// -------------------------------------------------------------Gallery image save-----------------------------------------------------------------------------



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/gallery');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the filename format
    }
});

const gallery = multer({ storage });




// -------------------------------------------------------------occasion image save-----------------------------------------------------------------------------






const occasionImages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/occasion_images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the filename format
    }
});

const occasionGallery = multer({ storage: occasionImages });


// -------------------------------------------------------------Employee Profile Photo save-----------------------------------------------------------------------------

const employeePhoto = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/employeeProfile');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const uploadEmployeeProfile = multer({ storage: employeePhoto });



  
// -------------------------------------------------------------Event gallery Save-----------------------------------------------------------------------------



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



// -------------------------------------------------------------mail gallery  Save-----------------------------------------------------------------------------


const mailattachement = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/mailattachment');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the filename format
    }
});

const mailimage = multer({ storage: mailattachement });
const mailimagessave = mailimage.array('image', 10);


export  { gallery, multipleevent , occasionGallery , uploadEmployeeProfile , mailimagessave };
