import axios from 'axios';
import type {Project, ContactForm} from '../types';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL as string});

export const fetchProjects = () => API.get<{ data: Project[] }>('/projects');
export const sendEmail = (formData: ContactForm) => API.post('/contact', formData);