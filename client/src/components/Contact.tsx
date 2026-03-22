import React, { useState } from 'react';
import { sendEmail } from '../services/api';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await sendEmail(form);
            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-slate-400 mb-8">
                I’m currently looking for new opportunities or just to talk tech.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text" placeholder="Name" required
                    className="w-full bg-[#112240] border border-slate-700 p-3 rounded focus:border-accent outline-none"
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                />
                <input
                    type="email" placeholder="Email" required
                    className="w-full bg-[#112240] border border-slate-700 p-3 rounded focus:border-accent outline-none"
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                />
                <textarea
                    placeholder="Message" rows={5} required
                    className="w-full bg-[#112240] border border-slate-700 p-3 rounded focus:border-accent outline-none"
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                />
                <button
                    className="px-10 py-4 border border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="text-green-400 mt-2">Message sent successfully!</p>}
            </form>
        </section>
    );
};
export default Contact;