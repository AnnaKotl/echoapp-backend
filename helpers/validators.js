const Joi = require('joi');

const formValidationSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).max(500).required(),
  selectedService: Joi.string().required(),
  mobileNumber: Joi.string().required()
});

const validators = (data) => {
  const { error } = formValidationSchema.validate(data);
  if (error) {
    const message = error.details.map((detail) => detail.message).join(', ');
    throw new Error(message);
  }
};

module.exports = validators;

// Joi - validation schema

// old code
// const Joi = require('joi');
// const validators = Joi.object({
//   firstName: Joi.string().min(2).max(50).required(),
//   lastName: Joi.string().min(2).max(50).required(),
//   email: Joi.string().email().required(),
//   mobileNumber: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
//   selectedService: Joi.string().valid('IOS-app-1', 'IOS-app-2', 'IOS-app-3').required(),
//   comment: Joi.string().max(500).optional(),
// });
// module.exports = validators;
