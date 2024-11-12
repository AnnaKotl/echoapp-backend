const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (v) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
      message: 'Invalid email format',
    },
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: 5,
    maxlength: 500,
  },
  selectedService: {
    type: String,
    required: [true, 'Selected service is required'],
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
  },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;