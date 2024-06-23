
import admin from '../../model/admin/admin_m.js';
import Email from '../../model/admin/mail_m.js';
import Service from '../../model/admin/service_m.js';
import CompanyDetails from '../../model/admin/company_Details_m.js';
import Category from '../../model/admin/category_m.js';
import Employee from '../../model/admin/employe_m.js';
import Customers from '../../model/admin/customers_m.js';
import Manager from '../../model/admin/manager_m.js';
import Clients from '../../model/admin/clients_m.js';
import Target from '../../model/admin/target_m.js';
import Gallery from '../../model/admin/gallery_m.js';
import EventsGallery from '../../model/admin/EventsGallery_m.js';
import Leaves from '../../model/admin/leaves_m.js';
import Occasiongallery from '../../model/admin/occasionGallery_m.js';
import {  generateToken } from '../../middleware.js'; // middleware for genrate token
 



class AddController {




// -------------------------------------------------------------------------------------Save admin--------------------------------------------------------------------------------------------------------->
      static adminform = async (req, res) => {
        try {
            res.render('admin/add.ejs', { section: "adminform" }); 
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server Error' });
        }
    }

      static async saveadmin(req, res) {
        try {
          const getdata = req.body;
          const data = await Employee.create(getdata); 
          res.json(data);
          } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'Server Error' });
          }
       }

  // -------------------------------------------------------------------------------------Admin Login Api --------------------------------------------------------------------------------------------------------->

  static adminlogin = async (req, res) => {
    try {
    
    } catch (error) {
     
    }
  };
  

// -------------------------------------------------------------------------------------Save employee And Form --------------------------------------------------------------------------------------------------------->



static employeeform = async (req,res)=>{
  const fetchcount = await Employee.count();
  const totaldata  = fetchcount + 1;
  const getmanager  = await Manager.findAll();
  res.render('admin/add.ejs',{section :"employeeform" , countdata : totaldata , managers : getmanager});

}


static saveemployee = async (req, res) => {
  try {
    if (!req.file) {
    console.log('sorry');
    }

    const { filename } = req.file; // Destructure filename from req.file
    const employee = await Employee.create({ profile_photo : filename, ...req.body} );
    const payload = {
      id: employee.id,
      employee_name: employee.employee_name, // Corrected from user.employee_name
      email: employee.email
    };

    const token = generateToken(payload);

    // Send response with both user data and token
    res.status(201).json({ employee, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}







// -------------------------------------------------------------------------------------Save savecompany Details--------------------------------------------------------------------------------------------------------->

static addcompanyform = async(req,res) => {
  res.render('admin/add.ejs', {section :"companyform"});
}
  static savecompany = async (req, res) => {
    try {
      const user = await CompanyDetails.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }

// -------------------------------------------------------------------------------------AddClients--------------------------------------------------------------------------------------------------------->

static addClientsform = async(req,res) => {
  res.render('admin/add.ejs', {section :"addClientsform"});
}
  static savecompany = async (req, res) => {
    try {
      const user = await Clients.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }



// -------------------------------------------------------------------------------------Save Category--------------------------------------------------------------------------------------------------------->


static categoryform = async (req,res)=>{
  res.render('admin/add.ejs',{section :"categoryform"})
}
  static savecategory = async (req, res) => {
    try {
      const user = await Category.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }

// -------------------------------------------------------------------------------------Save Customer--------------------------------------------------------------------------------------------------------->




static cutomerform = async(req,res)=>{
  res.render('admin/add.ejs',{section :"cutomer_form"})
}
static savecustomer = async (req, res) => {
  try {
    const { employeeId } = req.body; // Assuming 'employeeId' is present in the request body

    // Check if the employee exists
    const cheakemployee = await Employee.findByPk(employeeId);
    if (!cheakemployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Create the customer
    const customerData = { ...req.body, employeeId }; // Merge 'employeeId' into customer data
    const customer = await Customers.create(customerData);

    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}


// -------------------------------------------------------------------------------------Save Manager Form--------------------------------------------------------------------------------------------------------->



static assignmanagerform = async(req,res)=>{
  res.render('admin/add.ejs',{section :"assignmanagerform"})
}

static savemanager = async (req, res) => {
  try {
    const user = await Manager.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

// -------------------------------------------------------------------------------------Service Save--------------------------------------------------------------------------------------------------------->

static serviceform = async(req,res)=>{
  const getadata = await Category.findAll();
  const fetchcount = await Service.count();
  const totaldata  = fetchcount + 1;
  res.render('admin/add.ejs',{section :"serviceform" , getadata , totaldata})
}

static saveservice = async (req, res) => {
  try {
    const user = await Service.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}



// -------------------------------------------------------------------------------------save / Add Manager --------------------------------------------------------------------------------------------------------->

static addmanagerform = async(req,res)=>{ 
  const categorydata = await Category.findAll(); 
  const employeedata = await Employee.findAll(); 
  const managercount = await Manager.count();
  const totalcount = managercount+1;
  res.render('admin/add.ejs',{section :"addmanagerform", senddata : categorydata , empdata : employeedata , count : totalcount});
}

static savemanager = async (req, res) => {
  try {
    const user = await Manager.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}





// ------------------------------------------------------------------------------------Save  Gallery--------------------------------------------------------------------------------------------------------->


static addimage = async (req, res) => {
  const gallery = await Gallery.findAll();
  res.render('admin/add.ejs', { section: "addgallery" , gallery});
}

 
static savegallery = async (req, res) => {
  const { filename } = req.file; 
  try {
    // Assuming Gallery model is properly imported and defined
    const data = await Gallery.create({ image: filename }); // Assuming 'image' field matches your model
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// -------------------------------------------------------------------------------------AddEvetnts Gallery--------------------------------------------------------------------------------------------------------->


static addEventsGallery = async (req, res) => {
  res.render('admin/add.ejs', { section: "EventsGallery" });
} 

static saveeventsgallery = async (req, res) => {
  const files = req.files;  
  try {

      const data = await EventsGallery.bulkCreate(
        files.map(file => ({ image: file.filename }))
      );
      res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}







// -------------------------------------------------------------------------------------Add Ocasion Gallery--------------------------------------------------------------------------------------------------------->


static addOccasionGallery = async (req, res) => {
  res.render('admin/add.ejs', { section: "occasionGallery" });
}

static saveOccasiongallery = async (req, res) => {
  const { filename } = req.file; 
  try {
    // Assuming Gallery model is properly imported and defined
    const data = await Occasiongallery.create({ image: filename }); 
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}




// -------------------------------------------------------------------------------------save target--------------------------------------------------------------------------------------------------------->


static taregetform = async (req, res) => {
  const getemployee = await Employee.findAll(); 
  res.render('admin/add.ejs', { section: "addtargetform" , getemployee});
}

static savetarget = async (req, res) => {
  try {
    const data = await Target.create(req.body); 
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



// -------------------------------------------------------------------------------------Leave form--------------------------------------------------------------------------------------------------------->

static leavesform = async(req,res) => {
  res.render('admin/add.ejs', {section :"leavesform"});
}
  static saveleavs = async (req, res) => {
    try {
      const user = await Leaves.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }





// -------------------------------------------------- Send Email ------------------------------------------------------------------------------------------------------------


static sendmail = async (req, res) => {
  try {
      const admin_mail = await admin.findAll();
      const getemployeemail = await Employee.findAll();
      res.render('admin/add.ejs', {  section: "sendEmail" , getemployeemail , admin_mail}); // Render the view
  } catch (error) {
      console.error('Error fetching services:', error);
      res.status(500).json({ error: 'Error fetching services' }); // Send JSON response in case of error
  }
}


static saveemail = async (req,res)=>{
  try{
    const getdata = await Email.create(req.body);
    res.json(getdata);

  }catch(e){
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Error fetching services' }); // Send JSON response in case of error
  }
}


}






export default AddController;
