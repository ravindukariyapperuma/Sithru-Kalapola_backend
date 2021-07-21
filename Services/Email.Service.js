const nodemailer = require("nodemailer");

module.exports = {
  registerSuccessful: async (user) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Registration is successful", // Subject line
      // text: "Hello world?", // plain text body
      html: `
      <table align='center' width='40%' cellspacing='0' cellpadding='0' style='text-align:center'>
        <tr>
          <td align='center' style='border: 1px solid #2196F3; background: #2196F3; text-align: center; color: white;'>
            <h2>WELCOME TO APPLICATION</h2>
          </td>
        </tr>
        <tr>
          <td align='center' style='border: 1px solid #2196F3; text-align:center; color: black;'>
            <br><span style='font-size: 20px;'>Thanks for registration<br><b>${user.name}</b></span><br>
            <img src='cid:tick' width='20%' /><br><b>Your registration is successful</b><br><br>
          </td>
        </tr>
        <tr>
          <td>
            Sithru , All rights reserved
          </td>
        </tr>
      </table>`, // html body
      attachments: [
        {
          filename: "tick.png",
          path: "Services/Images/tick.png",
          cid: "tick",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  },
};
