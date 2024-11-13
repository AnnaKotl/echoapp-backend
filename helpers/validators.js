const Joi = require('joi');

const formValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  mobileNumber: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
  email: Joi.string().email().required(),
  socialNetwork: Joi.string().optional(),
  country: Joi.string().min(2).max(50).required(),
  city: Joi.string().min(2).max(50).optional(),
  selectedService: Joi.string().valid('IOS-app-1', 'IOS-app-2', 'IOS-app-3').required(),
  message: Joi.string().max(2000).optional()
});

const validators = (data) => {
  const { error } = formValidationSchema.validate(data);
  if (error) {
    const message = error.details.map((detail) => detail.message).join(', ');
    throw new Error(message);
  }
};

module.exports = validators;