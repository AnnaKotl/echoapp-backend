require('dotenv').config();

const mailjet = require('node-mailjet').apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

const sendEmail = async (to, subject, text) => {
  try {
    const request = await mailjet
      .post("send", { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: "your-email@example.com",
              Name: "Your Name",
            },
            To: [
              {
                Email: to,
              },
            ],
            Subject: subject,
            TextPart: text,
          },
        ],
      });
    console.log("Email sent:", request.body);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

module.exports = sendEmail;

// sendEmail