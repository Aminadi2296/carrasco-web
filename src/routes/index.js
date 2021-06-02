const { Router } = require('express')
const nodemailer = require("nodemailer");
const router = Router()
require('dotenv').config();

const Swal = require('sweetalert2')

router.post('/send-email', async(req, res)=>{
    const {email, message, name, phone, service} = req.body;
    contentHTML = `
        <h1>Enviado desde Web Site</h1>
        <h3><b>De: ${ name }, Email: ${ email }</b></h3>
        <h3>Numero de telefono: ${phone}</h3>
        <h2>Servicio Solicitado ${service}</h2>
        <br />
        <b>MENSAJE:</b>
        <p>${message}</p>
    `
    
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.gmail',
            port: 465,
            secure: false, // true for 465, false for other ports
            service: 'gmail',
            auth: {
              user: process.env.EMAIL, // generated ethereal user
              pass: process.env.PASSWORD, // generated ethereal password
            },
            tls: {
              rejectUnauthorized: true
            }
          });

          let mailOptions = {
            from: `ADMIN David ${email}`,
            to: 'davidjared123@gmail.com',
            subject: `${name},"${email}" desde mi web`,
            html: contentHTML
          }
    
          const info = await transporter.sendMail( mailOptions, function (err, data) {
            try {
              console.log("FUNCIONA")
              Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
              // res.redirect('./success.html')
            } catch (error) {
              console.log('Error')
            }
          });

          // console.log('Message Info', info.messageId)
          
           
    })


module.exports = router