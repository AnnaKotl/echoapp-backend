const { HttpError, validators, sendEmail, Request } = require('../helpers');

const createContactRequest = async (req, res, next) => {
  try {
    const validData = validators(req.body);

    const {
      name,
      email,
      message,
      selectedService,
      mobileNumber,
      socialNetwork,
      country,
      city,
    } = validData;

    const newRequest = await Request.create(validData);

    console.log("Sending email to:", process.env.RECIPIENT_EMAIL);

    await sendEmail({
      to: process.env.RECIPIENT_EMAIL,
      subject: 'NEW CUSTOMER FEEDBACK MESSAGE RECEIVED',
      ...validData,
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
