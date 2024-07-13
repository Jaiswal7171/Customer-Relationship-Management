import express from "express";
const router = express.Router();

import UserAddController from '../controllers/user/addcontroller.js';
import UserViewController from '../controllers/user/viewcontroller.js'; 
import   { authenticate}  from './../middleware.js';


router.get('/',UserAddController.loginpage);  
router.post('/userlogin',UserAddController.login_user);



router.get('/dashboard',authenticate,UserViewController.indexpage);


router.get('/companydetails',authenticate,UserViewController.getcompanyDetails);  
router.get('/companyservices',authenticate,UserViewController.getServiceDetails);  


//customers

router.get('/leads',authenticate,UserViewController.displaycustomer);
router.get('/addleads',authenticate,UserAddController.cutomerform);
router.post('/savecustomers',authenticate,UserAddController.savecustomer);

//import
router.get('/i_lead',authenticate,UserViewController.displayimportedlead);
router.get('/saveanother',authenticate,UserAddController.saveimportedlead);
router.get('/importedLeads',authenticate,UserViewController.allleads); // all Imported Leads 


router.get('/addfollowup',authenticate,UserAddController.addfollowup);
router.post('/savefollowup',authenticate,UserAddController.savefollowup);
router.get('/followup',authenticate,UserViewController.displayfollowup);



router.get('/addwork',authenticate,UserAddController.workform);
router.post('/savework',authenticate,UserAddController.savework);
router.get('/workdetails',authenticate,UserViewController.displayworkdetails);


router.get('/addleaves' ,authenticate,UserAddController.leavesform);
router.post('/saveleaves',authenticate,UserAddController.saveleaves);
router.get('/leavedeatils',authenticate,UserViewController.displayleavedetails);



//task

router.get('/task',UserViewController.taskform);
router.put('/updateTask/:id',authenticate,UserViewController.updateUser);

//snapMessage


//employeeProfile
router.get('/profile',authenticate,UserViewController.getEmployeeProfile);

//clients
router.get('/clients',UserViewController.getclients);


//clients
router.get('/count',UserViewController.getcount);


//



export default router;