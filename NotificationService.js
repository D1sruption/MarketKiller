var nodemailer = require('nodemailer');

function sendMail(message) {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: 'tarkov.marketkiller@gmail.com',
		  pass: 'drnm9qr7'
		}
	});
	
	var mailOptions = {
		from: 'tarkov.marketkiller@gmail.com',
		to: 'tarkov.marketkiller@gmail.com',
		subject: 'MarketKiller API Bot: Purchase Notification',
		text: message
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	  });
}