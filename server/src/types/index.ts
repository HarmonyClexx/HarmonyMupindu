import { Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    category: 'Professional' | 'Personal';
    description: string;
    techStack: string[];
    githubLink?: string;
    liveLink?: string;
    isFeatured: boolean;
}

export interface IContact extends Document {
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}