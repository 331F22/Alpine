"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
	user: "bsf-auto@outlook.com",
	pass: "CSCI331-Group-7"
    },
});

async function sendTestMail() {
    // send mail with defined transport object
    try {
	const info = await transporter.sendMail({
    	    from: '"Bridger Ski Foundation" <bsf-auto@outlook.com>', // sender address
    	    to: "colespencerbrooks@gmail.com", // list of receivers
    	    subject: "TEST", // Subject line
    	    text: "Hello world?", // plain text body
    	    html: "<b>Hello world?</b>", // html body
	});
	console.log(`Test sent successfully, email ID: ${info.messageId}`);
    } catch(err) {
	console.log(err);
    }

}

module.exports = {
    // TODO: Write various API functions
    sendCreateConfirmation: () => {
	sendTestMail();
    },

    sendUpdateConfirmation: () => {
    },

    sendDeleteConfirmation: () => {
    },
};

