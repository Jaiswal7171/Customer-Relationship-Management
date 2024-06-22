// import Employee from '../../model/admin/employe_m.js';
import Customers from '../../model/admin/customers_m.js';
import Follow_up from '../../model/admin/followup_m.js';
import WorkDetail from '../../model/admin/WorkDetail_m.js';
import Leaves from '../../model/admin/leaves_m.js';
import I_Lead from '../../model/admin/Imported_lead_m.js';
import Employee from '../../model/admin/employe_m.js';
import   { generateToken}  from '../../middleware.js';


class UserAddController {




//-------------------------------------------------------------------------------------EnployeeLogin--------------------------------------------------------------------------------------------------------->


    static loginpage = async (req, res) => {
      try {
        res.render('user/login.ejs');
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }

  static login_user = async (req, res) => {
      const { email, password } = req.body;
      try {

        const user = await Employee.findOne({ where: { email } });
        if (!user || user.password !== password) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }

        const payload = {
          id : user.id,
          email : user.email
        };
    
        const token = generateToken(payload);
        res.cookie('token', token, { httpOnly: true, secure: true }); // Added secure: true
        // res.redirect(`/dashboard?id=${user.id}`);
        res.redirect(`/dashboard`);
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    }


//-------------------------------------------------------------------------------------Add Lead--------------------------------------------------------------------------------------------------------->


    static cutomerform = async (req, res) => {
      try {

        const employeeid =  req.user;
        res.render('user/add.ejs', { section: "lead_form" , employeeid});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }


    static savecustomer = async (req, res) => {
      try {
        const customer = await Customers.create(req.body);
        res.status(201).json(customer);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }


//-------------------------------------------------------------------------------------Imported Lead Save------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->


static saveimportedlead  = async (req, res) => {
  try {
    const { id } = req.query;
    const lead = await I_Lead.findByPk(id); // Fetch the lead based on id

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    const leadData = lead.toJSON();
    delete leadData.id;
    delete leadData.createdAt;
    delete leadData.updatedAt;

    const newCustomer = await Customers.create(leadData);


    await lead.destroy();;


    res.json(newCustomer); 

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

    

//-------------------------------------------------------------------------------------Add Lead Folloe Up ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

static addfollowup = async (req, res) => {
  const getemployeeid =  req.user.id; //get the employeeid using jwt middleware also get email if i want 
  const getleadid = req.query.leadid; // get lead id
  const getleadname = req.query.leadName; // get lead Name
  res.render('user/add.ejs', { section: "addfollowup", lead_id: getleadid , lead_name : getleadname ,employeeid : getemployeeid});
}

    static savefollowup = async (req, res) => {
      try {
        const followup = await Follow_up.create(req.body);
        res.status(201).json(followup);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }
    
    


//-------------------------------------------------------------------------------------Add Daily work ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

      
    static workform = async (req, res) => {
      res.render('user/add.ejs', { section: "work_form"});
    }
    static savework = async (req, res) => {
      try {
        const followup = await WorkDetail.create(req.body);
        res.status(201).json(followup);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }
    
    
// -------------------------------------------------------------------------------------Add Leaves Form--------------------------------------------------------------------------------------------------------->



static leavesform = async(req,res)=>{
  res.render('user/add.ejs',{section :"leaves_form"})
}

static saveleaves = async (req, res) => {
  try {
    const user = await Leaves.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}



}

export default UserAddController;


