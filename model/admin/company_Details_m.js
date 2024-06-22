import {  DataTypes } from "sequelize";
import sequelize from "../../connection/db.js";

const CompanyDetails = sequelize.define('company_details', {
    company_name: {
        type: DataTypes.STRING
    },
    company_category: {
        type: DataTypes.STRING
    },
    company_address: {
        type: DataTypes.STRING
    },
    company_pincode: {
        type: DataTypes.STRING
    },
    company_phone: {
        type: DataTypes.STRING
    },

    company_whatsappNo: {
        type: DataTypes.STRING
    },


    company_email: {
        type: DataTypes.STRING
    },
    company_website: {
        type: DataTypes.STRING
    },
    company_linkedin: {
        type: DataTypes.STRING
    },
    company_instagram: {
        type: DataTypes.STRING
    },
    company_facebook: {
        type: DataTypes.STRING
    },
    company_twitter: {
        type: DataTypes.STRING
    },


    company_details: {
        type: DataTypes.TEXT
    }



}, {

    tableName: 'company_details'
});

(async () => {
    await CompanyDetails.sync(); 
})();

export default CompanyDetails;
