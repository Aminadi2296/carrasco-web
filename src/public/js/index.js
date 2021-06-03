const nodemailer = require("nodemailer");
require('dotenv').config();

const controller = {}

controller.index = (req, res)=>{
    res.send('mi mensaje')
}

controller.sweetAlert = function sweetAlert() { 
        alert('funciona')
}


controller.message =  async(req, res)=>{
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
              res.redirect('./')
            } catch (error) {
              console.log('Error en info')
            }
          });

          // console.log('Message Info', info.messageId)

          
           
    }
module.exports = controller
