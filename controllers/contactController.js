const Request = require('../models/Request');
const sendEmail = require('../helpers/sendEmail');
const { HttpError } = require('../helpers');
const { formValidationSchema } = require('../helpers/validators');

const createContactRequest = async (req, res, next) => {
  try {
    const { error } = formValidationSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.details[0].message);
    }
    const newRequest = await Request.create(req.body);

    await sendEmail({
      to: process.env.SITE_OWNER_EMAIL,
      subject: 'New Contact Request',
      html: `<p>New contact request from ${req.body.firstName} ${req.body.lastName}</p>`,
    });

    res.status(201).json({ message: 'Contact request submitted successfully', newRequest });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createContactRequest,
};

// processing form requests
// storing data in MongoDB