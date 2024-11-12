const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  mobileNumber: { type: String, required: true, trim: true },
  selectedService: { type: String, required: true, trim: true },
  comment: { type: String, trim: true, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', requestSchema);

// form "Contact us"
// {
//     "_id": "605c72ef15320735a34edddf",
//     "firstName": "Anna",
//     "lastName": "Kotliar",
//     "email": "anna@example.com",
//     "mobileNumber": "+380631234567",
//     "selectedService": "IOS-app-1",
//     "comment": "I need to create a mobile app for my business. Cry for any money!",
//     "createdAt": "2024-11-12T12:34:56.789Z"
//   }
  