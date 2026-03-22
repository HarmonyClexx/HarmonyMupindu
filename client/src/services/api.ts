import axios from 'axios';
import type {Project, ContactForm} from '../types';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchProjects = () => API.get<{ data: Project[] }>('/projects');
export const sendEmail = (formData: ContactForm) => API.post('/contact', formData);