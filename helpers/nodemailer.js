const nodemailer = require("nodemailer");

"use strict";



async function main(email, username) {
  
  let testAccount = await nodemailer.createTestAccount(email, username);

  let transporter = nodemailer.createTransport({
    service: "google",
    auth: {
      user: "kareen.anna2@gmail.com", // generated ethereal user
      pass: "hqwzphiqbgjifgwl", // generated ethereal password
    },
  });

  
  let info = await transporter.sendMail({
    from: '"My Note👻" <foo@mynote.com>', 
    to: email,
    subject: "Hello ✔", // Subject line
    text: "Hello!", // plain text body
    html: `"<b>Hello html</b>", // html body


    <p>Hi, <b>${username}!</b> Your account has been created!</p>`
  });

}


module.exports = main