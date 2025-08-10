// server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import ContactMessage from './models/ContactMessage.js'; // Note the .js extension is required for ES modules

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
// Replace this with your actual MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/'; 
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Configure Nodemailer Transporter
// IMPORTANT: Use a secure "App Password" here, NOT your regular password.
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'anuahish249@gmail.com', // Your Gmail address
    pass: 'fwko kvdo kdii pbju', // The App Password you generated
  },
});

// API Endpoint for the contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newContactMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });

    // 1. Save the message to the database
    const savedMessage = await newContactMessage.save();
    
    // 2. Send the email using Nodemailer
    const mailOptions = {
      from: 'YOUR_GMAIL_EMAIL',
      to: 'anuahish249@gmail.com', // Your email where you want to receive the messages
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Message from Portfolio Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    console.log('Message saved to DB and email sent successfully!');
    res.json({ msg: 'Message sent successfully!', message: savedMessage });
    
  } catch (err) {
    console.error('Error during form submission:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
