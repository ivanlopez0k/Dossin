const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const viajesContentPath = path.join(__dirname, 'viajesContent.html');
const contactoClientePath = path.join(__dirname, 'conctactoCliente.html');
const contactoProveedorPath = path.join(__dirname, 'contactoProveedor.html');
const cvPath = path.join(__dirname, 'cv.html');

const viajesContent = fs.readFileSync(viajesContentPath, 'utf-8');
const contactoCliente = fs.readFileSync(contactoClientePath, 'utf-8');
const contactoProveedor = fs.readFileSync(contactoProveedorPath, 'utf-8');
const cv = fs.readFileSync(cvPath, 'utf-8');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage,limits: { fileSize: 1024 * 1024 * 10 } });

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) => {
  console.log(req.body); 
  next();
});

app.get('/', async(req, res)=>{
  const html = `<html>
    <head><title>Funciona</title>
    <body>
      <h1>Proyecto funcional</h1>
    </body>
  </html>`

  res.send(html);
})

//VIAJES
app.post('/viajes', upload.array('archivosPDF'), async (req, res) => {
  console.log('Archivos recibidos:', req.files);
  console.log('Datos del formulario:', req.body);
const { nombre, apellido, telefono, transporte, ahaAfipEmpresa, libreDeudaEmpresa, constanciaIIBBEmpresa, constanciaCBUEmpresa, dniChofer, licenciaChofer, altaTempranaChofer, artChofer, lintiChofer, seguroVidaChofer, rtoCamion, polizaSeguroCamion, pasoSeguroCamion, rutaCamion,certificadoSatelitalCamion } = req.body;
const archivosPDF = req.files;

console.log('Datos recibidos en el backend:', req.body);
console.log('Datos del formulario:', nombre);

    const  email  = 'matias@lossoles.org';
    const  CLIENT_ID  = '1006983588167-539dpenprkvhipfd60kch2prmuhf4ic1.apps.googleusercontent.com';
    const  CLIENT_SECRET  = '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';
    const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN  = '1//04c4taTskJzieCgYIARAAGAQSNwF-L9IricDWW_egv11cCsb1-XOL6EasqUG0GqpGwFWvA3CgcrTYdmS6C2fIrUmjoQo3YADgr8U';

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    );
    const contenidoModificado = viajesContent.replace('{{nombre}}', nombre)
    .replace('{{apellido}}', apellido)
    .replace('{{telefono}}', telefono)
    .replace('{{transporte}}', transporte)
    .replace('{{ahaAfipEmpresa}}', ahaAfipEmpresa)
    .replace('{{libreDeudaEmpresa}}', libreDeudaEmpresa)
    .replace('{{constanciaIIBBEmpresa}}', constanciaIIBBEmpresa)
    .replace('{{constanciaCBUEmpresa}}', constanciaCBUEmpresa)
    .replace('{{dniChofer}}', dniChofer)
    .replace('{{licenciaChofer}}', licenciaChofer)
    .replace('{{altaTempranaChofer}}', altaTempranaChofer)
    .replace('{{artChofer}}', artChofer)
    .replace('{{lintiChofer}}', lintiChofer)
    .replace('{{rtoCamion}}', rtoCamion)
    .replace('{{polizaSeguroCamion}}', polizaSeguroCamion)
    .replace('{{pasoSeguroCamion}}', pasoSeguroCamion)
    .replace('{{rutaCamion}}', rutaCamion)
    .replace('{{certificadoSatelitalCamion}}', certificadoSatelitalCamion)
    .replace('{{seguroVidaChofer}}', seguroVidaChofer)


    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
  
    async function sendMail() {
      archivosPDF.forEach((archivo, index) => {
});
      try {
        const tokenAcceso = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            type: 'OAuth2',
            user: 'dossin.mail.service@gmail.com',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: tokenAcceso,
          },
        });

        const attachments = archivosPDF.map((archivo, index) => ({
          filename: archivo.originalname,
          content: archivo.buffer,
        }));

        const mailOptions = {
          from: 'dossin.mail.service@gmail.com',
          to: email,
          subject: 'Formulario de Viajes',
          html: contenidoModificado,
          attachments: attachments
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado:', info.response);
        return res.status(200).json({ message: '¡Gracias!' });
      } catch (error) {
        console.error('Error interno del servidor:', error);
        return res.status(500).json({ error: 'Error interno al enviar el correo' });
      }
    }
    sendMail(nombre, archivosPDF)

  });
  

  //CONTACTO CLIENTE
  app.post('/contacto-cliente', async (req, res) => {

  const { nombre, apellido, telefono, empresa, email , cuit, servicios, texto } = req.body;

  
  console.log('Datos recibidos en el backend:', req.body);

      const  email_  = 'matias@lossoles.org';
      const  CLIENT_ID  = '1006983588167-539dpenprkvhipfd60kch2prmuhf4ic1.apps.googleusercontent.com';
      const  CLIENT_SECRET  = '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';
      const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
      const REFRESH_TOKEN  = '1//04c4taTskJzieCgYIARAAGAQSNwF-L9IricDWW_egv11cCsb1-XOL6EasqUG0GqpGwFWvA3CgcrTYdmS6C2fIrUmjoQo3YADgr8U';
  
      const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI,
      );
      const contenidoModificado = contactoCliente.replace('{{nombre}}', nombre)
      .replace('{{apellido}}', apellido)
      .replace('{{telefono}}', telefono)
      .replace('{{empresa}}', empresa)
      .replace('{{email}}', email)
      .replace('{{cuit}}', cuit)
      .replace('{{servicio}}', servicios)
      .replace('{{mensaje}}', texto)
  
  
      oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    
    
      async function sendMail() {
        try {
          const tokenAcceso = await oAuth2Client.getAccessToken();
          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              type: 'OAuth2',
              user: 'dossin.mail.service@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: tokenAcceso,
            },
          });
  
          const mailOptions = {
            from: 'dossin.mail.service@gmail.com',
            to: email_,
            subject: 'Mensaje de Cliente',
            html: contenidoModificado,
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
  
    });
    
  //CONTACTO PROVEEDOR
  app.post('/contacto-proveedor', async (req, res) => {

    const { nombre, apellido, telefono, empresa, email , cuit, servicios, texto } = req.body;
  
    
    console.log('Datos recibidos en el backend:', req.body);
  
        const  email_  = 'matias@lossoles.org';
        const  CLIENT_ID  = '1006983588167-539dpenprkvhipfd60kch2prmuhf4ic1.apps.googleusercontent.com';
        const  CLIENT_SECRET  = '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';
        const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
        const REFRESH_TOKEN  = '1//04c4taTskJzieCgYIARAAGAQSNwF-L9IricDWW_egv11cCsb1-XOL6EasqUG0GqpGwFWvA3CgcrTYdmS6C2fIrUmjoQo3YADgr8U';
    
        const oAuth2Client = new google.auth.OAuth2(
          CLIENT_ID,
          CLIENT_SECRET,
          REDIRECT_URI,
        );
        const contenidoModificado = contactoProveedor.replace('{{nombre}}', nombre)
        .replace('{{apellido}}', apellido)
        .replace('{{telefono}}', telefono)
        .replace('{{empresa}}', empresa)
        .replace('{{email}}', email)
        .replace('{{cuit}}', cuit)
        .replace('{{servicio}}', servicios)
        .replace('{{mensaje}}', texto)
    
    
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
      
      
        async function sendMail() {
          try {
            const tokenAcceso = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                type: 'OAuth2',
                user: 'dossin.mail.service@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: tokenAcceso,
              },
            });
    
            const mailOptions = {
              from: 'dossin.mail.service@gmail.com',
              to: email_,
              subject: 'Mensaje de Proveedor',
              html: contenidoModificado,
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
    
      });
    
 // CONTACTO CV
 app.post('/cv', upload.array('archivoPDF'), async (req, res) => {
  console.log('Archivos recibidos:', req.files);
  console.log('Datos del formulario:', req.body);
const { apellido, nombre, empresa, profesion, edad, dni, email, telefono } = req.body;
const archivosPDF = req.files;

console.log('Datos recibidos en el backend:', req.body);
console.log('Datos del formulario:', nombre);

    const  email_  = 'matias@lossoles.org';
    const  CLIENT_ID  = '1006983588167-539dpenprkvhipfd60kch2prmuhf4ic1.apps.googleusercontent.com';
    const  CLIENT_SECRET  = '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';
    const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN  = '1//04c4taTskJzieCgYIARAAGAQSNwF-L9IricDWW_egv11cCsb1-XOL6EasqUG0GqpGwFWvA3CgcrTYdmS6C2fIrUmjoQo3YADgr8U';

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    );
    const contenidoModificado = cv.replace('{{nombre}}', nombre)
    .replace('{{apellido}}', apellido)
    .replace('{{telefono}}', telefono)
    .replace('{{empresa}}', empresa)
    .replace('{{profesion}}', profesion)
    .replace('{{edad}}', edad)
    .replace('{{dni}}', dni)
    .replace('{{email}}', email)

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
  
    async function sendMail() {
      archivosPDF.forEach((archivo, index) => {
});
      try {
        const tokenAcceso = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            type: 'OAuth2',
            user: 'dossin.mail.service@gmail.com',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: tokenAcceso,
          },
        });

        const attachments = archivosPDF.map((archivo, index) => ({
          filename: archivo.originalname,
          content: archivo.buffer,
        }));

        const mailOptions = {
          from: 'dossin.mail.service@gmail.com',
          to: email_,
          subject: 'CURRICULUM',
          html: contenidoModificado,
          attachments: attachments
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado:', info.response);
        return res.status(200).json({ message: '¡Gracias!' });
      } catch (error) {
        console.error('Error interno del servidor:', error);
        return res.status(500).json({ error: 'Error interno al enviar el correo' });
      }
    }
    sendMail(archivosPDF)

  });
       

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
