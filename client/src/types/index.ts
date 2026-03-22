export interface Project {
    _id: string;
    title: string;
    category: 'Professional' | 'Personal';
    description: string;
    techStack: string[];
    githubLink?: string;
    liveLink?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}