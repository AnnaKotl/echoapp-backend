const Joi = require('joi');

const validators = (schema, data) => {
  const { error } = schema.validate(data);
  if (error) {
    const message = error.details.map((detail) => detail.message).join(', ');
    const status = 400;
    throw new Error(message, status);
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
