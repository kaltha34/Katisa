'use client';

import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const initial = {
  name: '',
  email: '',
  role: '',
  experience: '',
  portfolio: '',
  message: '',
};

export default function JoinForm() {
  const [formData, setFormData] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await addDoc(collection(db, 'applications'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'pending',
      });
      setSubmitted(true);
      setFormData(initial);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError('Failed to submit. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {[
        ['name', 'Full name', 'text'],
        ['email', 'Email', 'email'],
        ['role', 'Role you’re applying for', 'text'],
        ['experience', 'Experience', 'text'],
        ['portfolio', 'Portfolio / GitHub / LinkedIn', 'url'],
      ].map(([name, label, type]) => (
        <div key={name}>
          <label className="mb-1.5 block text-sm font-medium text-white/85">{label}</label>
          <input
            required={name !== 'portfolio'}
            className="input-field"
            type={type}
            name={name}
            value={formData[name]}
            onChange={onChange}
          />
        </div>
      ))}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/85">Why do you want to join?</label>
        <textarea
          required
          className="input-field min-h-28"
          name="message"
          value={formData.message}
          onChange={onChange}
        />
      </div>

      {submitted && (
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          Application submitted. We’ll review and get back to you.
        </div>
      )}
      {error && (
        <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-60">
        {loading ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  );
}
