const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let employee = new Schema({
  employee_name: {
    type: String
  },
  employee_email: {
    type: String
  },
  section: {
    type: String
  },
  subjects: {
    type: Array
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  collection: 'employee'
})

module.exports = mongoose.model('employee', employee)