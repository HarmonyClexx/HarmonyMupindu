import mongoose, { Schema } from 'mongoose';
import { IProject } from '../types';

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ['Professional', 'Personal'], required: true },
    description: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    githubLink: { type: String },
    liveLink: { type: String },
    isFeatured: { type: Boolean, default: false }
});

export default mongoose.model<IProject>('Project', ProjectSchema);