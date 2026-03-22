import { Request, Response } from 'express';
import { ApiResponse, IProject } from '../types';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.model';
import Project from '../models/Project.model';

export const sendContactMessage = async (req: Request, res: Response<ApiResponse<string>>) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = new Contact({ name, email, subject, message });
        await newMessage.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO, // harmonymupindu@gmail.com
            subject: `Portfolio Inquiry: ${subject}`,
            text: message,
            html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
        });

        res.status(201).json({ success: true, data: 'Message sent and logged.' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};



export const getProjects = async (req: Request, res: Response<ApiResponse<IProject[]>>) => {
    try {
        // Sort by featured projects first, then alphabetically
        const projects = await Project.find().sort({ isFeatured: -1, title: 1 });

        res.status(200).json({
            success: true,
            data: projects
        });
    } catch (error) {
        console.error("Fetch Projects Error:", error);
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch projects'
        });
    }
};