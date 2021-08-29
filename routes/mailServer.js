const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.render('sendMail')
})

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service : 'gmail',
  auth: {
      user: process.env.myMail,
      pass: process.env.myPass
  }
})

router.post('/send/mail', (req,res) => {  
  var mailOptions = {
      from : process.env.myMail,
      to : req.body.emailId,
      subject : req.body.subject,
      text : req.body.mailBody
  }
  transporter.sendMail(mailOptions, (err, response)=>{
    if(err){console.log(err)}
    else{
        res.send(response);
    }
});
})

module.exports = router;
