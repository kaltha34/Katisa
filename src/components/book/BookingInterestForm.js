'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { validateField } from '@/lib/validation';
import {
  budgetRangeOptions,
  focusOptions,
  industryOptions,
  packageInterestOptions,
  site,
  whatsappUrl,
} from '@/lib/content';

const initial = {
  name: '',
  email: '',
  phone: '',
  focus: '',
  packageInterest: '',
  industry: '',
  budgetRange: '',
  message: '',
};

export default function BookingInterestForm() {
  const searchParams = useSearchParams();
  const presetPackage = searchParams.get('package') || '';
  const presetFocus = searchParams.get('focus') || '';

  const [formData, setFormData] = useState({
    ...initial,
    focus: focusOptions.some((o) => o.value === presetFocus) ? presetFocus : '',
    packageInterest: packageInterestOptions.some((o) => o.value === presetPackage)
      ? presetPackage
      : '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const focusLabel = useMemo(() => {
    return focusOptions.find((o) => o.value === formData.focus)?.label || formData.focus || 'Not selected';
  }, [formData.focus]);

  const packageLabel = useMemo(() => {
    return (
      packageInterestOptions.find((o) => o.value === formData.packageInterest)?.label ||
      formData.packageInterest ||
      'Not selected'
    );
  }, [formData.packageInterest]);

  const industryLabel = useMemo(() => {
    return (
      industryOptions.find((o) => o.value === formData.industry)?.label ||
      formData.industry ||
      'Not selected'
    );
  }, [formData.industry]);

  const budgetLabel = useMemo(() => {
    return (
      budgetRangeOptions.find((o) => o.value === formData.budgetRange)?.label ||
      formData.budgetRange ||
      'Not selected'
    );
  }, [formData.budgetRange]);

  const composedMessage = useMemo(() => {
    return [
      formData.message?.trim() || 'I would like a free audit / discovery call.',
      '',
      `Build, Grow, or Both?: ${focusLabel}`,
      `Package interested in: ${packageLabel}`,
      `Industry: ${industryLabel}`,
      `Budget range: ${budgetLabel}`,
    ].join('\n');
  }, [formData.message, focusLabel, packageLabel, industryLabel, budgetLabel]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    const name = validateField('Name', formData.name, { required: true, minLength: 2 });
    const email = validateField('Email', formData.email, { required: true, email: true });
    if (!name.isValid) next.name = name.errorMessage;
    if (!email.isValid) next.email = email.errorMessage;
    if (!formData.focus) next.focus = 'Please choose Build, Grow, or Both';
    if (!formData.packageInterest) next.packageInterest = 'Please choose a package';
    if (!formData.industry) next.industry = 'Please choose an industry';
    if (!formData.budgetRange) next.budgetRange = 'Please choose a budget range';
    if (formData.phone) {
      const phone = validateField('Phone', formData.phone, { phone: true });
      if (!phone.isValid) next.phone = phone.errorMessage;
    }
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
      setFormData({
        ...initial,
        focus: focusOptions.some((o) => o.value === presetFocus) ? presetFocus : '',
        packageInterest: packageInterestOptions.some((o) => o.value === presetPackage)
          ? presetPackage
          : '',
      });
      setTimeout(() => setSuccess(false), 6000);
      setTimeout(() => document.body.contains(iframe) && document.body.removeChild(iframe), 1000);
    };
    iframe.onerror = () => {
      setSubmitting(false);
      setError(true);
    };

    form.submit();
  };

  const waMessage = `Hi Katisa, I'm ${formData.name || 'a business owner'}. Focus: ${focusLabel}. Package: ${packageLabel}. Industry: ${industryLabel}. Budget: ${budgetLabel}. ${formData.message || 'I want a free audit.'}`;

  return (
    <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5 md:p-8">
      <h2 className="font-display text-2xl font-bold tracking-tight">Tell us what you need</h2>
      <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
        Build / Grow, package, industry and budget are included in the email we receive.
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
        <input type="hidden" name="_subject" value="New quote / audit request from Katisa website" />
        <input type="hidden" name="composed_message" value={composedMessage} />
        <input type="hidden" name="focus_label" value={focusLabel} />
        <input type="hidden" name="package_label" value={packageLabel} />
        <input type="hidden" name="industry_label" value={industryLabel} />
        <input type="hidden" name="budget_label" value={budgetLabel} />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Name</label>
            <input className="input-field" name="name" value={formData.name} onChange={onChange} />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Phone (optional)</label>
          <input
            className="input-field"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Build, Grow, or Both?</label>
          <select
            className="input-field"
            name="focus_area"
            value={formData.focus}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, focus: e.target.value }));
              if (errors.focus) setErrors((prev) => ({ ...prev, focus: '' }));
            }}
          >
            <option value="">Select</option>
            {focusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.focus && <p className="mt-1 text-sm text-red-400">{errors.focus}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Package interested in</label>
          <select
            className="input-field"
            name="package_interested_in"
            value={formData.packageInterest}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, packageInterest: e.target.value }));
              if (errors.packageInterest) setErrors((prev) => ({ ...prev, packageInterest: '' }));
            }}
          >
            <option value="">Select a package</option>
            {packageInterestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.packageInterest && (
            <p className="mt-1 text-sm text-red-400">{errors.packageInterest}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Industry</label>
          <select
            className="input-field"
            name="industry"
            value={formData.industry}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, industry: e.target.value }));
              if (errors.industry) setErrors((prev) => ({ ...prev, industry: '' }));
            }}
          >
            <option value="">Select industry</option>
            {industryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.industry && <p className="mt-1 text-sm text-red-400">{errors.industry}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Budget range</label>
          <select
            className="input-field"
            name="budget_range"
            value={formData.budgetRange}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, budgetRange: e.target.value }));
              if (errors.budgetRange) setErrors((prev) => ({ ...prev, budgetRange: '' }));
            }}
          >
            <option value="">Select a range</option>
            {budgetRangeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budgetRange && <p className="mt-1 text-sm text-red-400">{errors.budgetRange}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Anything else? (optional)</label>
          <textarea
            className="input-field min-h-24"
            name="message"
            value={formData.message}
            onChange={onChange}
            placeholder="e.g. salon in Colombo, need site + Instagram help"
          />
        </div>

        {success && (
          <div className="border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
            Request sent. You can also book a time on the calendar below.
          </div>
        )}
        {error && (
          <div className="border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            Something went wrong. WhatsApp us or email {site.email}.
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" disabled={submitting} className="btn-primary flex-1 disabled:opacity-60">
            {submitting ? 'Sending…' : 'Get a Free Audit'}
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
