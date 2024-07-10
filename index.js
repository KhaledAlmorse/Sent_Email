const nodemailer = require("nodemailer");

const transportmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YourEmail",
    pass: "YourPassword",
  },
});

const mailcontent = {
  from: "khaledmanea0077@gmail.com",
  to: "mohameadmaneaa22@gmail.com",
  subject: "Test Email From Khaled Almorse",
  text: "Hi Khaled Almorse",
};

transportmail.sendMail(mailcontent, function (err, val) {
  if (err) {
    console.log(err);
  } else {
    console.log(val.response, "sent email");
  }
});
