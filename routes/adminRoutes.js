import express from 'express';
import AddController from '../controllers/admin/addcontroller.js';
import Viewcontroller from '../controllers/admin/viewcontroller.js';
import Deletecontroller from '../controllers/admin/deletecontroller.js';
import { gallery, multipleevent, occasionGallery, uploadEmployeeProfile , mailimagessave } from '../file_middleware.js';
const router = express.Router();




//dashboard routes
router.get('/dashboard',Viewcontroller.indexpage);





// Admin Routes
router.get('/addadmin',AddController.adminform);
router.post('/saveadmin',AddController.saveadmin);
router.get('/admin',Viewcontroller.displayadmin);


//targets
router.get('/addtarget',AddController.taregetform); // add targets
router.post('/savetarget',AddController.savetarget); // save target
router.get('/employee-target',Viewcontroller.targetEmployees); // get all employess for view target
router.get('/targetdetails',Viewcontroller.displaytarget);


//leave
router.get('/employee-leaves',Viewcontroller.leaveemployee);
router.get('/leavedetails',Viewcontroller.displayleaves);




// Category Routes
router.get('/addcategory',AddController.categoryform);
router.post('/savecategory',AddController.savecategory);
router.get('/categories',Viewcontroller.displaycategory);
router.get('/categories/delete',Deletecontroller.deleteCategory); // Adjusted route here




// Employee Routes
router.get('/addemployees', AddController.employeeform);
router.post('/saveemployee',uploadEmployeeProfile.single('profile_photo'),AddController.saveemployee); 
router.get('/employees',Viewcontroller.displayEmployee);


// Customer Routes
router.post('/savecustomer',AddController.savecustomer);
router.get('/customers',Viewcontroller.displaycustomers);


//Manager Routes
router.get('/assignmanager',AddController.assignmanagerform);
router.post('/savemanager',AddController.savemanager);


// Service Routes
router.get('/addservicers',AddController.serviceform);
router.post('/saveservice',AddController.saveservice);
router.get('/services',Viewcontroller.displayservices);



//Our compant details Routes
router.get('/addcompany',AddController.addcompanyform);
router.post('/savecompany',AddController.savecompany);



//employeedetails
router.get('/employeedetails', Viewcontroller.employeeprofile);
router.get('/count',Viewcontroller.callcount);
router.get('/getcalldetails',Viewcontroller.calldetails);



//manger routes
router.get('/addmanager',AddController.addmanagerform);
router.post('/savemanager',AddController.savemanager);
router.get('/managers',Viewcontroller.displaymanager);


//clients
router.get('/clients',AddController.addClientsform);

//work details With emp[loyee Profile]
router.get('/workprofile',Viewcontroller.work_employee_profile);
router.get('/workdetails',Viewcontroller.work_details);



//Mail 
// router.get('/mail',AddController.sendmail);  
// router.post('/savemail',mailimagessave,AddController.saveemail);  

//Add Gallery Routes
router.get('/addgallery', AddController.addimage);
router.post('/savegallery', gallery.single('image'), AddController.savegallery);



//evenets images routers
router.get('/eventgallery',AddController.addEventsGallery);
router.post('/saveevents',multipleevent,AddController.saveeventsgallery); 



//occasionGallery
router.get('/occasion',AddController.addOccasionGallery);
router.post('/saveoccasion', occasionGallery.single('image'), AddController.saveOccasiongallery); 



router.get('/addclients',AddController.clientsform);



export default router;
