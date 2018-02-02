const functions = require('firebase-functions');
//bd3167eed3b1c266c122cbb2f6fb4554
//

//var Mailjet = require('node-mailjet').connect('bd3167eed3b1c266c122cbb2f6fb4554', '84562e7cf8d561bceb96de687a4882bc');
//var sendEmail = Mailjet.post('send');
//const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = `musicofyourlifeandmore@gmail.com`;
const gmailPassword = `music244andmore`;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const APP_NAME = 'Cloud Storage for Firebase quickstart';
exports.sendFEmail = functions.database.ref('messages/{uid}').onWrite(event => {

    // only trigger for new users [event.data.previous.exists()]
    // do not trigger on delete [!event.data.exists()]
    if (!event.data.exists() || event.data.previous.exists()) {
      return
    }
  
    var user = event.data.val()
    console.log(user);
    var {email} = user
    /*
    var emailData = {
        'FromEmail': 'my@email.com',
        'FromName': 'My Name',
        'Subject': 'Test with the NodeJS Mailjet wrapper',
        'Text-part': 'Hello NodeJs ! ${user}',
        'Recipients': [{'Email': 'christophermoverton@gmail.com'}]

    }
    var data = {
      from: 'app@noreply.com',
      subject: 'Welcome!',
      html: `<p>New message! ${user}</p>`,
      'h:Reply-To': 'app@app.com',
      to: email
    }
    sendEmail
    .request(emailData)
      .then(handlePostResponse)
      .catch(handleError);
    */
      const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: `rabramsmusic@gmail.com`
      };
    
      // The user subscribed to the newsletter.
      mailOptions.subject = `Music Of Your Life Contact Notice!`;
      mailOptions.text = `${user.name} sent a message!. Here is the message:  ${user.message}.  This is the sender's email address:  ${user.email}`;
      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('message sent!');
      });
    })
