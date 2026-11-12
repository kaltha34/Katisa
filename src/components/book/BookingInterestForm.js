'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { validateField } from '@/lib/validation';
import {
  budgetRangeOptions,
  businessTypeOptions,
  completionReward,
  packageInterestOptions,
  site,
  whatsappUrl,
} from '@/lib/content';

const initial = {
  name: '',
  phone: '',
  need: '',
  businessType: '',
  budgetRange: '',
  message: '',
};

export default function BookingInterestForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get('package') || '';

  const presetNeed = packageInterestOptions.some((o) => o.value === preset)
    ? preset
    : preset.startsWith('website') || preset.includes('website')
      ? 'website'
      : preset.startsWith('stock') || preset.includes('stock')
        ? 'stock'
        : preset.startsWith('custom')
          ? 'custom'
          : preset.startsWith('marketing') || preset.includes('marketing') || preset.includes('pulse')
            ? 'marketing'
            : '';

  const [formData, setFormData] = useState({ ...initial, need: presetNeed });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const needLabel = useMemo(
    () => packageInterestOptions.find((o) => o.value === formData.need)?.label || formData.need || 'Not selected',
    [formData.need],
  );
  const businessLabel = useMemo(
    () =>
      businessTypeOptions.find((o) => o.value === formData.businessType)?.label ||
      formData.businessType ||
      'Not selected',
    [formData.businessType],
  );
  const budgetLabel = useMemo(
    () =>
      budgetRangeOptions.find((o) => o.value === formData.budgetRange)?.label ||
      'Not selected',
    [formData.budgetRange],
  );

  const composedMessage = useMemo(
    () =>
      [
        formData.message?.trim() || 'I would like to book a free call.',
        '',
        `What do you need?: ${needLabel}`,
        `Business type: ${businessLabel}`,
        `Budget range: ${budgetLabel}`,
        completionReward.enabled
          ? `Note: Client informed about free InQRS card on successful completion.`
          : '',
      ]
        .filter(Boolean)
        .join('\n'),
    [formData.message, needLabel, businessLabel, budgetLabel],
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    const name = validateField('Name', formData.name, { required: true, minLength: 2 });
    if (!name.isValid) next.name = name.errorMessage;
    if (!formData.phone.trim()) next.phone = 'Phone or WhatsApp is required';
    else {
      const phone = validateField('Phone', formData.phone, { phone: true });
      if (!phone.isValid) next.phone = phone.errorMessage;
    }
    if (!formData.need) next.need = 'Please choose what you need';
    if (!formData.businessType) next.businessType = 'Please choose a business type';
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
    iframe.name = 'hidden-booking-submit-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    form.target = 'hidden-booking-submit-iframe';
    iframe.onload = () => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ ...initial, need: presetNeed });
      setTimeout(() => setSuccess(false), 8000);
      setTimeout(() => document.body.contains(iframe) && document.body.removeChild(iframe), 1000);
    };
    iframe.onerror = () => {
      setSubmitting(false);
      setError(true);
    };
    form.submit();
  };

  const waMessage = `Hi Katisa, I'm ${formData.name || 'a business owner'}. Need: ${needLabel}. Business: ${businessLabel}. Budget: ${budgetLabel}. ${formData.message || 'Please book a free call.'}`;

  return (
    <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5 md:p-8">
      <h2 className="font-display text-2xl font-bold tracking-tight">Book a Free Call</h2>
      <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
        Short form. Your answers are included in the email we receive.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={onSubmit}
        action={`https://formsubmit.co/${site.email}`}
        method="POST"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New free call request from Katisa website" />
        <input type="hidden" name="composed_message" value={composedMessage} />
        <input type="hidden" name="need_label" value={needLabel} />
        <input type="hidden" name="business_type_label" value={businessLabel} />
        <input type="hidden" name="budget_label" value={budgetLabel} />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input id="name" className="input-field" name="name" value={formData.name} onChange={onChange} />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            className="input-field"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="need">
            What do you need?
          </label>
          <select
            id="need"
            className="input-field"
            name="what_do_you_need"
            value={formData.need}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, need: e.target.value }));
              if (errors.need) setErrors((prev) => ({ ...prev, need: '' }));
            }}
          >
            <option value="">Select</option>
            {packageInterestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.need && <p className="mt-1 text-sm text-red-400">{errors.need}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="businessType">
            Business type
          </label>
          <select
            id="businessType"
            className="input-field"
            name="business_type"
            value={formData.businessType}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, businessType: e.target.value }));
              if (errors.businessType) setErrors((prev) => ({ ...prev, businessType: '' }));
            }}
          >
            <option value="">Select</option>
            {businessTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.businessType && <p className="mt-1 text-sm text-red-400">{errors.businessType}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="budget">
            Budget range (optional)
          </label>
          <select
            id="budget"
            className="input-field"
            name="budget_range"
            value={formData.budgetRange}
            onChange={(e) => setFormData((prev) => ({ ...prev, budgetRange: e.target.value }))}
          >
            {budgetRangeOptions.map((opt) => (
              <option key={opt.value || 'none'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
            Message (optional)
          </label>
          <textarea
            id="message"
            className="input-field min-h-24"
            name="message"
            value={formData.message}
            onChange={onChange}
            placeholder="e.g. salon in Colombo, need a website"
          />
        </div>

        {success && (
          <div className="border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
            Request sent. We will contact you soon.
            {completionReward.enabled && (
              <span className="mt-1 block text-emerald-200/80">
                Reminder: successfully completed projects include a free InQRS NFC card (
                {completionReward.inqrsLabel}).
              </span>
            )}
          </div>
        )}
        {error && (
          <div className="border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            Something went wrong. WhatsApp us or email {site.email}.
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" disabled={submitting} className="btn-primary flex-1 disabled:opacity-60">
            {submitting ? 'Sending…' : 'Book a Free Call'}
          </button>
          <a
            href={whatsappUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 text-center"
          >
            Send on WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
