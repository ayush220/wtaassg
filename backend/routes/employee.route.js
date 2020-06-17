const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Student model
let employee = require('../model/employee');

// Add Student
employeeRoute.route('/add-employee').post((req, res, next) => {
  employee.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
employeeRoute.route('/').get((req, res) => {
  employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single student
employeeRoute.route('/read-employee/:id').get((req, res) => {
  employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
employeeRoute.route('/update-employee/:id').put((req, res, next) => {
  employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('employee successfully updated!')
    }
  })
})

// Delete student
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
  employee.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = employeeRoute;