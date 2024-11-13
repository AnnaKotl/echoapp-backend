require('dotenv').config();

const mailjet = require('node-mailjet').apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

const sendEmail = async ({ to, subject, name, mobileNumber, email, socialNetwork, country, city, selectedService, message }) => {
  try {
    // Перевірка email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    const htmlContent = `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>City:</strong> ${city || 'Not Provided'}</p>
      <p><strong>Selected Service:</strong> ${selectedService}</p>
      <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      <p><strong>Social Network:</strong> ${socialNetwork || 'Not Provided'}</p>
    `;

    const request = await mailjet
      .post("send", { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'no-reply@yourcompany.com', // Використовуйте свою адресу для відправника
              Name: name || 'Anonymous Client',
            },
            To: [
              {
                Email: process.env.RECIPIENT_EMAIL,
              },
            ],
            Subject: subject,
            HTMLPart: htmlContent,
            ReplyTo: email,
          },
        ],
      });

    console.log("Email sent:", request.body);

  } catch (error) {
    console.error("Error sending email:", error.message);

    console.log('Email:', email);
    console.log('Sending email to:', process.env.RECIPIENT_EMAIL);
  }
};


module.exports = sendEmail;
