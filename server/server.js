var express = require('express'),
  nodemailer = require('nodemailer')
  cors = require('cors');

var app = express();
var port = 4000;
app.use(cors())
app.use(express.json())

app.post('/send-email', function (req, res) {
  
  console.log(req.body)
  //res.setHeader('Content-Type', 'text/plain')
  
 
 
  var transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: 'michal1324@hotmail.com',
                pass: 'pedal66'
            }
        });
        var mailOptions = {
            from: 'Meblopol plus',
            to: 'john.rambo123@op.pl',
            subject: 'Wiadomość ze strony meblopol',
            text: `
              <h2>Imie i nazwisko: ${req.body.name}</h2>
              <p>Kontakt: ${req.body.contact}</p>
              <p>Wiadomość: ${req.body.message}</p>
            `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              res.status(404).send({ message: 'Email nie został wysłany', success: false })
            } else {
              res.send({ message: 'Email został pomyślnie wysłany', success: true })
            }
        });
});
app.listen(port, function () {
  console.log('Server is running at port: ', port);
});
