"use strict";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "bsf-auto@outlook.com",
    pass: "CSCI331-Group-7",
  },
});

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
 * Create a confirmation & send to the proper volunteer via email
 * @param {string} email 
 * @param {string} firstName 
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
  try {
    const info = await transporter.sendMail(mailConfig);
    console.log(`Confirmation sent successfully, ID: ${info.messageId}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// TODO: Configure update confirmation template & code with proper information
/**
 * Send confirmation update
 * @param {*} email 
 * @param {*} firstName 
 */
async function sendUpdateConfirmation(email, firstName) {
  let rawHTML = await readFile(
    "./components/mailHTMLTemplates/updateConfirmation.html",
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

module.exports = {
  sendCreateConfirmation: (email, firstName) => {
    sendCreateConfirmation(email, firstName);
  },

  sendUpdateConfirmation: () => {
    sendUpdateConfirmation(email, firstName);
  },

  sendDeleteConfirmation: () => {
    // TODO: Write sendDeleteConfirmation function
  },
};
