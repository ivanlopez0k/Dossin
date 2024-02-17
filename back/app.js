const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');
const fs = require('fs');
const viajesContent = fs.readFileSync('./viajesContent.html', 'utf-8');
const contactoCliente = fs.readFileSync('./conctactoCliente.html', 'utf-8');
const contactoProveedor = fs.readFileSync('./contactoProveedor.html', 'utf-8');
const cv = fs.readFileSync('./cv.html', 'utf-8');
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

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) => {
  console.log(req.body); 
  next();
});



//VIAJES
app.post('/viajes', upload.array('archivosPDF'), async (req, res) => {
  console.log('Archivos recibidos:', req.files);
  console.log('Datos del formulario:', req.body);
const { nombre, apellido, telefono, transporte, ahaAfipEmpresa, libreDeudaEmpresa, constanciaIIBBEmpresa, constanciaCBUEmpresa, dniChofer, licenciaChofer, altaTempranaChofer, artChofer, lintiChofer, seguroVidaChofer, rtoCamion, polizaSeguroCamion, pasoSeguroCamion, rutaCamion,certificadoSatelitalCamion } = req.body;
const archivosPDF = req.files;

console.log('Datos recibidos en el backend:', req.body);
console.log('Datos del formulario:', nombre);

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
            user: 'shapening7@gmail.com',
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
          from: 'shapening7@gmail.com',
          to: email,
          subject: 'Contacto de Viajes',
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

      const  email_  = 'shapening7@gmail.com';
      const  CLIENT_ID  = '818969776008-l686f5a6lfr1hhe9i4h84jhgvefkk0na.apps.googleusercontent.com';
      const  CLIENT_SECRET  = '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';
      const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
      const REFRESH_TOKEN  = '1//04Dhk_SU3Ffn2CgYIARAAGAQSNwF-L9IrqyLScE5x6zZFh_fekPJ6ghBBo5gnWtOj4qwWE2VYt0e7Jn9_c9W82kJqXBh-v1nVXMo';
  
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
              user: 'shapening7@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: tokenAcceso,
            },
          });
  
          const mailOptions = {
            from: 'shapening7@gmail.com',
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
  
        const  email_  = 'shapening7@gmail.com';
        const  CLIENT_ID  = '818969776008-l686f5a6lfr1hhe9i4h84jhgvefkk0na.apps.googleusercontent.com';
        const  CLIENT_SECRET  = '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';
        const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
        const REFRESH_TOKEN  = '1//04Dhk_SU3Ffn2CgYIARAAGAQSNwF-L9IrqyLScE5x6zZFh_fekPJ6ghBBo5gnWtOj4qwWE2VYt0e7Jn9_c9W82kJqXBh-v1nVXMo';
    
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
                user: 'shapening7@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: tokenAcceso,
              },
            });
    
            const mailOptions = {
              from: 'shapening7@gmail.com',
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

    const  email_  = 'shapening7@gmail.com';
    const  CLIENT_ID  = '818969776008-l686f5a6lfr1hhe9i4h84jhgvefkk0na.apps.googleusercontent.com';
    const  CLIENT_SECRET  = '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';
    const  REDIRECT_URI  = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN  = '1//04Dhk_SU3Ffn2CgYIARAAGAQSNwF-L9IrqyLScE5x6zZFh_fekPJ6ghBBo5gnWtOj4qwWE2VYt0e7Jn9_c9W82kJqXBh-v1nVXMo';

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
            user: 'shapening7@gmail.com',
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
          from: 'shapening7@gmail.com',
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
