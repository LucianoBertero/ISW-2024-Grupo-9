const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Reemplaza con la URL de tu aplicación Angular
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const { Resend } = require("resend");

const resend = new Resend("re_XXyZfSEE_G3YAJrYDakaZXKMYBMQKe4LP");
//rutas

app.post("/", async (req, res) => {
  const { nombrePaquete, nombrePersona } = req.body;
  const { data, error } = await resend.emails.send({
    from: "TangoApp <onboarding@resend.dev>",
    to: ["luchobertero@gmail.com"],
    subject: "Confirmacion de Pedido de Transporte",
    html: `<!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Pedido</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    
    <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; margin: 0 auto; padding: 20px; max-width: 600px; border-collapse: collapse;">
    <tr>
    <td style="padding: 20px 0; text-align: center;">
    </td>
    </tr>
    <tr>
    <td style="padding: 20px; text-align: center;">
    <h2 style="color: #333333;">¡Confirmación de Tansporte!</h2>
    <p style="color: #666666; font-size: 16px;">Estimado Transportista ${nombrePersona},</p>
    <p style="color: #666666; font-size: 16px;">Nos complace informarte que tu pedido de transporte <strong>${nombrePaquete}</strong> ha sido confirmado correctamente.</p>
    <p style="color: #666666; font-size: 16px;">Para ver más detalles sobre el , por favor haz clic en el botón de abajo.</p>
    </td>
    </tr>
    <tr>
    <td style="text-align: center; padding-bottom: 20px;">
    <a href="" style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Ver Detalles del Transporte</a>
    </td>
    </tr>
    <tr>
    <td style="padding: 20px; text-align: center;">
    <p style="color: #666666; font-size: 14px;">Gracias por elegirnos,</p>
    <p style="color: #666666; font-size: 14px;">Equipo de TangoApp.com</p>
    </td>
    </tr>
    </table>
    
    </body>
    </html>
    `,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
