import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.model';
import { ApiResponse } from '../types';

export const sendContactMessage = async (req: Request, res: Response<ApiResponse<string>>) => {
    try {
        const { name, email, subject, message } = req.body;

        // 1. Save to MongoDB
        const newMessage = new Contact({ name, email, subject, message });
        await newMessage.save();

        // 2. Setup Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use App Password, not normal password
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };

        // 3. Send Email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, data: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact Error:', error);
        res.status(500).json({ success: false, error: 'Failed to send message' });
    }
};