"use strict";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

// Create a transport email to send automatic emails from
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_PROVIDER,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send a test email to your self (change the 'to' field BEFORE use)
 * @access private
 */
async function sendTestMail() {
  // Send a test mail. Please change the "to" field before using.
  try {
    const info = await transporter.sendMail({
      from: '"Bridger Ski Foundation" <bsf-auto@outlook.com>', // sender address
      to: "codyfingerson0428@gmail.com", // list of receivers
      subject: "TEST", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log(`Test sent successfully, email ID: ${info.messageId}`);
  } catch (err) {
    console.log(err);
  }
}


/**
 * Send an email 
 * @param {string} email the volunteers email address
 * @param {string} subject the subject of the email
 * @param {string} htmlToSend a prepopulated html template
 */
async function sendNewMail(email, subject, htmlToSend) {
  let mailConfig = {
    from: "Bridger Ski Foundation <bsf-auto@outlook.com>",
    to: email,
    subject: subject,
    html: htmlToSend,
  };
  try {
    const info = await transporter.sendMail(mailConfig);
    console.log(`Email sent successfully, ID: ${info.messageId}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Create a confirmation & send to the proper volunteer via email
 * @param {string} email the volunteers email address
 * @param {string} firstName the volunteers first name
 */
async function sendCreateConfirmation(email, firstName) {
  let rawHTML = await readFile(
    "./components/mailHTMLTemplates/createConfirmation.html",
    "utf8"
  ); // Read HTML template

  let template = handlebars.compile(rawHTML); // Compile template with handlebars

  let userInfo = {
    firstName: firstName,
  };
  let htmlToSend = template(userInfo); // Use handlebars to populate fields

  let mailConfig = {
    from: "Bridger Ski Foundation <bsf-auto@outlook.com>",
    to: email,
    subject: "Volunteer Enrollment Confirmation",
    html: htmlToSend,
  };

  if(isValidEmail(email)) {
    try {
      const info = await transporter.sendMail(mailConfig);
      console.log(`Confirmation sent successfully, ID: ${info.messageId}`);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

/**
 * Send an auto email confirmation when the volunteer requests a change in email
 * @param {string} oldEmail the volunteers old email address
 * @param {string} newEmail the volunteers new email address
 */
async function sendUpdateConfirmation(oldEmail, newEmail) {
  let rawHTML = await readFile(
    "./components/mailHTMLTemplates/updateConfirmation.html",
    "utf8"
  ); // Read HTML template
  let template = handlebars.compile(rawHTML); // Compile template with handlebars
  let userInfo = {
    oldEmail: oldEmail,
    newEmail: newEmail,
  };
  let htmlToSend = template(userInfo); // Use handlebars to populate fields
  let mailConfig = {
    from: "Bridger Ski Foundation <bsf-auto@outlook.com>",
    to: newEmail,
    subject: "Volunteer Enrollment Update",
    html: htmlToSend,
  };
  try {
    const info = await transporter.sendMail(mailConfig);
    console.log(`Update sent successfully, ID: ${info.messageId}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Send confirmation of volunteer removal
 * @param {string} ea the volunteers email address
 */
async function sendDeleteConfirmation(ea) {
  let rawHTML = await readFile(
    "./components/mailHTMLTemplates/deleteConfirmation.html",
    "utf8"
  ); // Read HTML template
  let template = handlebars.compile(rawHTML); // Compile template with handlebars
  let userInfo = {
    email: ea,
  };
  let htmlToSend = template(userInfo); // Use handlebars to populate fields
  let mailConfig = {
    from: "Bridger Ski Foundation <bsf-auto@outlook.com>",
    to: ea,
    subject: "Volunteer Enrollment Update",
    html: htmlToSend,
  };
  try {
    const info = await transporter.sendMail(mailConfig);
    console.log(`Message sent successfully, ID: ${info.messageId}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function isValidEmail(str) {
  let isValid = false;
  let strAfterAtSign = str.split("@")[1];
  if (strAfterAtSign.includes("example.com") || strAfterAtSign.includes("test.com")) {
    isValid = false;
    return isValid;
  } else {
    isValid = true;
    return isValid;
  }
}

module.exports = {
  sendCreateConfirmation: (email, firstName) => {
    sendCreateConfirmation(email, firstName);
  },

  sendUpdateConfirmation: (oldEmail, newEmail) => {
    sendUpdateConfirmation(oldEmail, newEmail);
  },

  sendDeleteConfirmation: (ea) => {
    sendDeleteConfirmation(ea);
  },

  sendGenericMail: (ea, subject, HTMLToSend) => {
    sendNewMail(email, subject, htmlToSend);
  },
};
