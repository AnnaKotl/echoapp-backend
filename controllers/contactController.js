const { HttpError, validators, sendEmail, Request } = require('../helpers');

const createContactRequest = async (req, res, next) => {
  try {
    // Валідація запиту
    validators(req.body);

    const { firstName, lastName, email, message, selectedService, mobileNumber } = req.body;

    // Створення нового запиту
    const newRequest = await Request.create({ firstName, lastName, email, message, selectedService, mobileNumber });

    // Відправка листа
    await sendEmail({
      to: process.env.SITE_OWNER_EMAIL,
      subject: 'New Contact Request',
      html: `<p>New contact request from ${firstName} ${lastName}</p>`,
    });

    // Відповідь на успішний запит
    res.status(201).json({ message: 'Contact request submitted successfully', newRequest });
  } catch (err) {
    next(HttpError(400, err.message));
  }
};

module.exports = { createContactRequest };
