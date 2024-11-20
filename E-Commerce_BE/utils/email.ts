import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendMail = async (options: any) => {
  const transporter = await  nodemailer.createTransport({
    host: process.env.SMTP_HOST,  
    port: parseInt(process.env.SMTP_PORT!, 10),  
    service: process.env.SMTP_SERVICE, 
    secure : true,
    auth: {
      user: process.env.SMTP_MAIL,  
      pass: process.env.SMTP_PASSWORD,  
    },
    tls: {
        rejectUnauthorized: false,
      },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
