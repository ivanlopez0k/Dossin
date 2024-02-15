const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis')
const fs = require('fs');
const viajesContent = fs.readFileSync('./viajesContent.html', 'utf-8');
const app = express();
const port = 3000;




app.post('/viajes', async (req, res) => {


  
    const  email  = 'shapening7@gmail.com';
    const  CLIENT_ID  = '818969776008-l686f5a6lfr1hhe9i4h84jhgvefkk0na.apps.googleusercontent.com';
    const  CLIENT_SECRET  = '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';
    const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN  = '1//04Dhk_SU3Ffn2CgYIARAAGAQSNwF-L9IrqyLScE5x6zZFh_fekPJ6ghBBo5gnWtOj4qwWE2VYt0e7Jn9_c9W82kJqXBh-v1nVXMo';
  
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    );
  
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
  
    async function sendMail() {
      try {
        const tokenAcceso = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            type: 'OAuth2',
            user: 'shapening7@gmail.com',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: tokenAcceso,
          },
        });
        const mailOptions = {
          from: 'shapening7@gmail.com',
          to: email,
          subject: 'Prueba de Viajes',
          html: viajesContent,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado:', info.response);
        return res.status(200).json({ message: '¡Gracias!' });
      } catch (error) {
        console.error('Error interno del servidor:', error);
        return res.status(500).json({ error: 'Error interno al enviar el correo' });
      }
    }
    sendMail()
      .then(result => res.status(200).send('enviado'))
      .catch((error) => console.log(error.message));
  });
  

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
