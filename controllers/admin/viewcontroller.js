import admin from '../../model/admin/admin_m.js';
import Employee from '../../model/admin/employe_m.js';
import Category from '../../model/admin/category_m.js';
import Customers from '../../model/admin/customers_m.js';
import WorkDetail from '../../model/admin/WorkDetail_m.js';
import Service from '../../model/admin/service_m.js';
import Manager from '../../model/admin/manager_m.js';
import Target from '../../model/admin/target_m.js';
import Leaves from '../../model/admin/leaves_m.js';


class Viewcontroller {



    static indexpage = async (req, res) => {
        try {
          res.render('admin/index.ejs');
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Server Error' });
        }
      }

      

      

// --------------------------------------------------Display Admin ------------------------------------------------------------------------------------------------------------

    static displayadmin = async (req, res) => {
        try {
            const users = await admin.findAll();
            // res.render('admin/view.ejs',{section :"admin" , docs}); // Render the view
            // console.log(users); // Logging after sending response

            res.status(200).json({ users: users });
        } catch (error) {
            console.error('Error fetching admins:', error);
            res.status(500).json({ error: 'Error fetching admins' });
        }
    }



      

// --------------------------------------------------Display Target ------------------------------------------------------------------------------------------------------------

static targetEmployees = async (req, res) => {
    const  employees= await Employee.findAll();
    res.render('admin/view.ejs',{section :"target" , employees}); // Render the view
}

static displaytarget = async (req, res) => {
    const employee_Id = req.query.id;
    try {
        const targetDetails = await Target.findAll({where :{ employeeID : employee_Id}});
        res.render('admin/view', { section: "target_details", gettargetdetails: targetDetails });
    } catch (error) {
        console.error('Error fetching target details:', error);
        res.status(500).json({ error: 'Error fetching target details' });
    }
}



// --------------------------------------------------Display Employee ------------------------------------------------------------------------------------------------------------

    static displayEmployee = async (req, res) => {
        try {
            const docs = await Employee.findAll({
                include : {
                    model: Manager, 
                    attributes: ['manager_name'] 
                },

            });
            res.render('admin/view.ejs',{section :"employee" , docs}); // Render the view
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ error: 'Error fetching employees' }); // Send JSON response in case of error
        }
    }
    
// --------------------------------------------------Display Service ------------------------------------------------------------------------------------------------------------


    static displayservices = async (req, res) => {
        try {
            const docs = await Service.findAll();
            res.render('admin/view.ejs',{section :"services" , docs}); // Render the view
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ error: 'Error fetching employees' }); // Send JSON response in case of error
        }
    }

// --------------------------------------------------Display Category ------------------------------------------------------------------------------------------------------------

    static displaycategory = async (req, res) => {
        try {
            const docs = await Category.findAll();
            res.render('admin/view.ejs',{section :"category" , docs}); // Render the view
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ error: 'Error fetching employees' }); // Send JSON response in case of error
        }
    }
    
    
// -------------------------------------------------- displaycustomers ------------------------------------------------------------------------------------------------------------

    static displaycustomers = async (req, res) => {
        try {
            // Fetch customers with their associated employee (eager loading)
            const docs = await Customers.findAll({
              include: [{
                model: Employee,
                attributes: ['employee_name'] // Only select the needed employee attribute
              }]
            });
            res.render('admin/view.ejs',{ section :"customers" , docs}); // Render the view
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ error: 'Error fetching Customers' }); // Send JSON response in case of error
        }
    }



// -------------------------------------------------- Display employee ------------------------------------------------------------------------------------------------------------


static employeeprofile = async (req, res) => {
    try {
        const employeeId = req.query.id; // Assuming the id is passed as a query parameter
        
        // Corrected Sequelize query with alias 'Manager' for the association
        const getData = await Employee.findByPk(employeeId, {
            include: [{ model: Manager,  attributes: ['manager_name'] }]
        });

        res.render('admin/view.ejs', { section: 'employeeprofile', getData });
    } catch(error) {
        console.log("Error occurred:", error);
        res.status(500).send("Internal Server Error"); // Optionally handle the error response
    }
}



// -------------------------------------------------- Display Service ------------------------------------------------------------------------------------------------------------


    static displayservices = async (req, res) => {
        try {
            const serviceData = await Service.findAll({ include: [{ model: Category, attributes: ['category_name'] }] });
            res.render('admin/view.ejs', { section: "Service", serviceData }); // Render the view
        } catch (error) {
            console.error('Error fetching services:', error);
            res.status(500).json({ error: 'Error fetching services' }); // Send JSON response in case of error
        }
    }

    
// -------------------------------------------------- Display Managwer ------------------------------------------------------------------------------------------------------------

    static displaymanager = async (req, res) => {
        try {
            const managerdata = await Manager.findAll();
            res.render('admin/view.ejs', {  section: "all_managers",managerdata}); // Render the view
        } catch (error) {
            console.error('Error fetching services:', error);
            res.status(500).json({ error: 'Error fetching services' }); // Send JSON response in case of error
        }
    }
    
// -------------------------------------------------- Display CallCount ------------------------------------------------------------------------------------------------------------


    static callcount = async (req, res) => {
        try {
            const data = await Employee.findAll();
            res.render('admin/view.ejs',{section :"callcountdisplay" , data}); // Render the view
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ error: 'Error fetching employees' }); // Send JSON response in case of error
        }
    }

    static async calldetails(req, res) {
        try {
            const employee_Id = req.query.id;
            const getemployedetail = await Employee.findOne({ where: { id: employee_Id } });
    
            if (!getemployedetail) {
                res.status(404).json({ error: 'Employee not found' });
                return;
            }   
    
            const getcustomerdata = await Customers.findAll({ where: { employeeId: employee_Id } });
       
            res.render('admin/view.ejs', { section: "gaurav", data: getcustomerdata, employeeDetail: getemployedetail }); // Render the view
        } catch (error) {
            console.error('Error fetching customer details:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    




    

// -------------------------------------------------- Display Work Detail With Profile ------------------------------------------------------------------------------------------------------------

    static work_employee_profile = async (req, res) => {
        try {
            const getemployeedata = await Employee.findAll();
            res.render('admin/view.ejs', {  section: "work_profile" , getemployeedata}); // Render the view
        } catch (error) {
            console.error('Error fetching services:', error);
            res.status(500).json({ error: 'Error fetching services' }); // Send JSON response in case of error
        }
    }

// -------------------------------------------------- Display Work Detail With Profile ------------------------------------------------------------------------------------------------------------


    static work_details = async (req, res) => {
        try {
            const getemployeeId = req.query.id; 
            const workDetails = await WorkDetail.findAll({
                where: { employeeId: getemployeeId },
                include: [{ model: Employee }],
                order:[['createdAt', 'DESC']]
            });
            res.render('admin/view.ejs', { section: 'workdetails', data: workDetails });
        } catch(error) {
            console.log("You have the error", error);
        }
    }






// --------------------------------------------------------------------------Leave Approvals------------------------------------------------------------------------------------------------------------


static leaveemployee = async (req, res) => {
    const  getemployee= await Employee.findAll();
    res.render('admin/view.ejs',{section :"employess_leaves" , getemployee}); // Render the view
}


static displayleaves = async (req, res) => {
    const employeeId = req.query.id;
    const ename = req.query.employeename;
    try {
        const leaveDetails = await Leaves.findAll({where :{ employee_id : employeeId}});
        res.render('admin/view', { section: "leave_details", getleavesdetails: leaveDetails ,employee_Name :ename});
    } catch (error) {
        console.error('Error fetching target details:', error);
        res.status(500).json({ error: 'Error fetching target details' });
    }
}









}

export default Viewcontroller;
