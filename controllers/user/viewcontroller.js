import Customers from '../../model/admin/customers_m.js';
import I_Lead from '../../model/admin/Imported_lead_m.js';
import Follow_up from '../../model/admin/followup_m.js';
import WorkDetail from '../../model/admin/WorkDetail_m.js';
import CompanyDetails from '../../model/admin/company_Details_m.js';
import Service from '../../model/admin/service_m.js';
import Task from '../../model/user/task_m.js';
import Leaves from '../../model/admin/leaves_m.js';
// import SnapMessage from '../../model/user/snapmsg_m.js';
import Employee from '../../model/admin/employe_m.js';
import Manager from '../../model/admin/manager_m.js';
import Clients from '../../model/admin/clients_m.js';
import sequelize from '../../connection/db.js';
import Category from '../../model/admin/category_m.js';
import Gallery from '../../model/admin/gallery_m.js';
import EventsGallery from '../../model/admin/EventsGallery_m.js';

import Occasiongallery from '../../model/admin/occasionGallery_m.js';

class UserViewController {


//-------------------------------------------------------------------------------------Dashbord Index Page------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

    static indexpage = async (req, res) => {
        try {

            const loginadmin = req.user;

            const docs = await Customers.findAll({
                where: { employeeId: 20 },
                order: [['createdAt', 'DESC']],
                limit: 5
            });
            
            // const allimportdata = await I_Lead.findAll(); // Fetch all data
            const importtotalCount = await I_Lead.count(); // Get total count of records
            const clients_count = await Clients.count();
            // const leadfind = await Customers.findAll();
            const leadCount = await Customers.count(); // Get total count of records
            
            // const snapmessage = await SnapMessage.findAll();
    
            res.render('user/index.ejs', { 
                data: docs, 
                leadtotalCount: leadCount, 
                totalimportdataCount: importtotalCount,
                clients_count :clients_count,
                loginuser_print : loginadmin
                // snapmessages: snapmessage // Correctly pass 'snapmessages' here
            });
        } catch (error) {
            console.error('Error rendering index page:', error);
            res.status(500).json({ error: 'Error rendering index page' });
        }
    }
    





//-------------------------------------------------------------------------------------Disply LEad------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->



    static displaycustomer = async (req, res) => {
        try {
            const getemployeeId = req.user.id; //id ffrom jwt middleware
            // console.log(employeeId);
            const docs = await Customers.findAll({where:{employeeId:getemployeeId}});
            res.render('user/view.ejs' , {section : 'leads' , docs});
        } catch (error) {
            console.error('Error rendering index page:', error);
            res.status(500).json({ error: 'Error rendering index page' });
        }
    }


    static displayimportedlead = async (req, res) => {
        try {
            const docs = await I_Lead.findAll();
            res.render('user/view.ejs' , {section : 'imported_lead' , docs});
        } catch (error) {
            console.error('Error rendering index page:', error);
            res.status(500).json({ error: 'Error rendering index page' });
        }
    }


    
        static allleads = async (req, res) => {
        try {
            const docs = await I_Lead.findAll();
            res.render('user/view.ejs' , {section : 'all_imported_lead' , docs});
        } catch (error) {
            console.error('Error rendering index page:', error);
            res.status(500).json({ error: 'Error rendering index page' });
        }
    }


//--------------------------------------------------------Display Follow Up Details----------------------------------------------------------------------------------------------------------------------------------------------


    static displayfollowup = async (req, res) => {
        try {
      
            const customer_id = req.query.leadid; // get lead id
            const get_leadName = req.query.leadName; // get lead  name
            const docs = await Follow_up.findAll({where :{ customer_id }});
            res.render('user/view.ejs' , {section : 'view_followups' , docs , customer_id , get_leadName});
        } catch (error) {
            console.error('Error retrieving follow-up records:', error);
            res.status(500).json({ error: 'Error retrieving follow-up records' });
        }
    }
    
//--------------------------------------------------------Display Follow Up Details----------------------------------------------------------------------------------------------------------------------------------------------


    static displayworkdetails = async (req, res) => {
        try {
            const docs = await WorkDetail.findAll();
            res.render('user/view.ejs' , {section : 'workdeatails' , docs});
        } catch (error) {
            console.error('Error retrieving follow-up records:', error);
            res.status(500).json({ error: 'Error retrieving follow-up records' });
        }
    }




static getcompanyDetails = async (req, res) => {
    try {
        const companyDetails = await CompanyDetails.findOne({});
        const galleryImages = await Gallery.findAll();
        const eventgallery = await EventsGallery.findAll();
        const occasion_gallery = await Occasiongallery.findAll();
        const clients_count = await Clients.count();
        res.render('user/view.ejs', { section: 'company_Details', data: companyDetails , images : galleryImages , event_gallery :eventgallery ,occasion : occasion_gallery , clientcount : clients_count});
        } catch (error) {
            console.error('Error retrieving company details:', error);
            res.status(500).json({ error: 'Error retrieving company details' });
        }
    }




static getServiceDetails = async (req, res) => {
    try {
        const services = await Service.findAll({ 
            include: [{ 
                model: Category, 
                attributes: ['category_name'] // Select the attributes you need from Category model
            }]  
        });
        res.render('user/view.ejs', { section: 'company_Services', services });
    } catch (error) {
        console.error('Error retrieving service records:', error);
        res.status(500).json({ error: 'Error retrieving service records' });
    }
}







    static displayleavedetails = async (req, res) => {
        try {
            const docs = await Leaves.findAll();
            res.render('user/view.ejs' , {section : 'view_leaves' , docs});
        } catch (error) {
            console.error('Error retrieving follow-up records:', error);
            res.status(500).json({ error: 'Error retrieving follow-up records' });
        }
    }



    static taskform = async (req, res) => {
        try {
            const docs = await Task.findOne();
            res.render('user/view.ejs' , {section : 'view_task' , data : docs});
        } catch (error) {
            console.error('Error retrieving follow-up records:', error);
            res.status(500).json({ error: 'Error retrieving follow-up records' });
        }
    }

    static updateUser = async (req, res) => {
        try {
            const id = req.params.id; 
            const data = req.body; 
        
            const task = await Task.findByPk(id); // Find task by primary key
    
            // Update task properties
            task.description = data.description;
            await task.save();
            res.render('user/view.ejs', { section: 'view_task', data: task });
        
        } catch (error) {
            console.error('Error updating task:', error);
            res.status(500).json({ error: 'Error updating task' });
        }
    }
    

    
    









    static getEmployeeProfile = async (req, res) => {
        try {
            const docs = await Employee.findOne({ where: { id: 22 } , include: [{ model: Manager, attributes: ['manager_name']}]});
            res.render('user/view.ejs', { section: 'employee_profile', getData: docs });
        } catch (error) {
            console.error('Error retrieving employee profile:', error);
            res.status(500).json({ error: 'Error retrieving employee profile' });
        }
    }
    


    static getclients = async (req, res) => {
        try {
            const clientsdata = await Clients.findAll({});
            res.render('user/view.ejs', { section: 'get_clients',  data : clientsdata});
            // res.status(201).json({clientsdata});
        } catch (error) {
            console.error('Error retrieving company details:', error);
            res.status(500).json({ error: 'Error retrieving company details' });
        }
    }
    
    static getcount = async (req, res) => {
        try {
          const count = await Customers.findAll({
            attributes: [
              [sequelize.fn('DATE', sequelize.col('createdAt')), 'createdAt'],
              [sequelize.fn('COUNT', sequelize.col('id')), 'count']
            ],
            group: [sequelize.fn('DATE', sequelize.col('createdAt'))],
            raw: true  // This ensures the result is a plain object
          });
      
          const followup = await Follow_up.findAll({
            attributes: [
              [sequelize.fn('DATE', sequelize.col('createdAt')), 'createdAt'],
              [sequelize.fn('COUNT', sequelize.col('id')), 'count']
            ],
            group: [sequelize.fn('DATE', sequelize.col('createdAt'))],
            raw: true  // This ensures the result is a plain object
          });
      
          res.render('user/view.ejs', { section: 'countdata', normal: count, follow_up: followup });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Server Error' });
        }
      }
      
  


      





}

export default UserViewController;
