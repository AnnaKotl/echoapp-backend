const { HttpError, validators, sendEmail, Request } = require('../helpers');

const createContactRequest = async (req, res, next) => {
  try {
    validators(req.body);

    const { name, email, message, selectedService, mobileNumber, socialNetwork, country, city } = req.body;

    const newRequest = await Request.create({
      name,
      email,
      message,
      selectedService,
      mobileNumber,
      socialNetwork,
      country,
      city,
    });

    console.log("Sending email to:", process.env.RECIPIENT_EMAIL);

    await sendEmail({
      to: process.env.RECIPIENT_EMAIL,
      subject: 'NEW CUSTOMER FEEDBACK MESSAGE RECEIVED',
      name,
      email,
      mobileNumber,
      selectedService,
      socialNetwork,
      country,
      city,
      message,
    });

    res.status(201).json({
      message: 'Contact request submitted successfully',
      newRequest,
    });
  } catch (err) {
    next(HttpError(400, err.message));
  }
};

module.exports = { createContactRequest };
