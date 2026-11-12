'use client';

import { useState } from 'react';
import { validateField } from '@/lib/validation';

const initial = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    const name = validateField('Name', formData.name, { required: true, minLength: 2 });
    const email = validateField('Email', formData.email, { required: true, email: true });
    const subject = validateField('Subject', formData.subject, { required: true });
    const message = validateField('Message', formData.message, { required: true, minLength: 10 });
    if (!name.isValid) next.name = name.errorMessage;
    if (!email.isValid) next.email = email.errorMessage;
    if (formData.phone) {
      const phone = validateField('Phone', formData.phone, { phone: true });
      if (!phone.isValid) next.phone = phone.errorMessage;
    }
    if (!subject.isValid) next.subject = subject.errorMessage;
    if (!message.isValid) next.message = message.errorMessage;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setError(false);
    const form = e.target;
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden-form-submit-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    form.target = 'hidden-form-submit-iframe';

    iframe.onload = () => {
      setSubmitting(false);
      setSuccess(true);
      setFormData(initial);
      setTimeout(() => setSuccess(false), 5000);
      setTimeout(() => document.body.contains(iframe) && document.body.removeChild(iframe), 1000);
    };
    iframe.onerror = () => {
      setSubmitting(false);
      setError(true);
    };

    form.submit();
  };

  return (
    <form
      className="space-y-4"
      onSubmit={onSubmit}
      action="https://formsubmit.co/katisatechnologies@gmail.com"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New contact from Katisa website" />

      {[
        ['name', 'Name', 'text'],
        ['email', 'Email', 'email'],
        ['phone', 'Phone (optional)', 'tel'],
        ['subject', 'Subject', 'text'],
      ].map(([name, label, type]) => (
        <div key={name}>
          <label className="mb-1.5 block text-sm font-medium text-[color:var(--ink)]">{label}</label>
          <input
            className="input-field"
            type={type}
            name={name}
            value={formData[name]}
            onChange={onChange}
          />
          {errors[name] && <p className="mt-1 text-sm text-red-400">{errors[name]}</p>}
        </div>
      ))}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[color:var(--ink)]">Message</label>
        <textarea
          className="input-field min-h-32"
          name="message"
          value={formData.message}
          onChange={onChange}
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      {success && (
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          Message sent. We’ll get back to you soon.
        </div>
      )}
      {error && (
        <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          Something went wrong. Please email us directly.
        </div>
      )}

      {/* Honeypot — leave empty */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
