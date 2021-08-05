const mongoose = require('mongoose');

const {
    COMPANY,
    EMPLOYEE
} = require('../const/consts');

const { Schema } = mongoose;

const companySchema = new Schema(COMPANY.schema, {collection : 'Company'});
const employeeSchema = new Schema(EMPLOYEE.schema, {collection : 'Employee'});

const Company = mongoose.model('Company',companySchema);
const Employee = mongoose.model('Employee',employeeSchema);

const COLLECTIONS = {
    "Company" : Company,
    "Employee" : Employee
};

exports.COLLECTIONS = COLLECTIONS;