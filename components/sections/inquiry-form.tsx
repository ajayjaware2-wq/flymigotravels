'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, MessageCircle, Mail } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/reveal';
import { SITE } from '@/lib/site-data';
import { submitInquiry } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const budgetOptions = [
  'Under \u20B925,000',
  '\u20B925,000 \u2013 \u20B950,000',
  '\u20B950,000 \u2013 \u20B91,00,000',
  '\u20B91,00,000 \u2013 \u20B92,00,000',
  'Above \u20B92,00,000',
];

const hotelOptions = ['3 Star', '4 Star', '5 Star / Luxury', 'Villa / Resort', 'Budget'];
const contactOptions = ['WhatsApp', 'Phone Call', 'Email'];
const travelerOptions = ['1', '2', '3\u20134', '5\u20137', '8+'];

export function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    destination: '',
    travel_date: '',
    budget: '',
    travelers: '',
    hotel_preference: '',
    special_requirements: '',
    whatsapp_number: '',
    preferred_contact: 'WhatsApp',
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const buildMessage = () =>
    [
      `*New Trip Inquiry \u2014 Flymigo Travels*`,
      ``,
      `Name: ${form.name || 'Not provided'}`,
      `Destination: ${form.destination || 'Not specified'}`,
      `Travel Date: ${form.travel_date || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      `Travelers: ${form.travelers || 'Not specified'}`,
      `Hotel Preference: ${form.hotel_preference || 'Not specified'}`,
      `Special Requirements: ${form.special_requirements || 'None'}`,
      `WhatsApp Number: ${form.whatsapp_number || 'Not provided'}`,
      `Preferred Contact: ${form.preferred_contact}`,
    ].join('\n');

  const buildMailSubject = () =>
    `New Trip Inquiry \u2014 ${form.destination || 'Custom Trip'} \u2014 Flymigo Travels`;

  const buildMailBody = () =>
    [
      `New trip inquiry received via flymigotravels.com`,
      ``,
      `Name: ${form.name || 'Not provided'}`,
      `Destination: ${form.destination || 'Not specified'}`,
      `Travel Date: ${form.travel_date || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      `Travelers: ${form.travelers || 'Not specified'}`,
      `Hotel Preference: ${form.hotel_preference || 'Not specified'}`,
      `Special Requirements: ${form.special_requirements || 'None'}`,
      `WhatsApp Number: ${form.whatsapp_number || 'Not provided'}`,
      `Preferred Contact: ${form.preferred_contact}`,
    ].join('\n');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.destination && !form.whatsapp_number) {
      setStatus('error');
      return;
    }
    setStatus('submitting');

    await submitInquiry({
      name: form.name,
      destination: form.destination,
      travel_date: form.travel_date,
      budget: form.budget,
      travelers: form.travelers,
      hotel_preference: form.hotel_preference,
      special_requirements: form.special_requirements,
      whatsapp_number: form.whatsapp_number,
      preferred_contact: form.preferred_contact,
    });

    const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(waUrl, '_blank');

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      buildMailSubject()
    )}&body=${encodeURIComponent(buildMailBody())}`;
    window.location.href = mailto;

    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white p-10 text-center shadow-[0_24px_60px_-24px_rgba(11,31,58,0.3)]"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
            Inquiry Sent!
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We&rsquo;ve opened WhatsApp and your email app with your trip details.
            Our travel experts will get back to you within a few hours with a
            personalized plan.
          </p>
          <button
            onClick={() => {
              setForm({
                name: '',
                destination: '',
                travel_date: '',
                budget: '',
                travelers: '',
                hotel_preference: '',
                special_requirements: '',
                whatsapp_number: '',
                preferred_contact: 'WhatsApp',
              });
              setStatus('idle');
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.3)] sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Your Name">
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="e.g. Aarav Mehta"
            className="lux-input"
          />
        </Field>
        <Field label="Destination" required>
          <input
            type="text"
            value={form.destination}
            onChange={(e) => update('destination', e.target.value)}
            placeholder="e.g. Maldives, Dubai, Kashmir"
            className="lux-input"
            required
          />
        </Field>
        <Field label="Travel Date">
          <input
            type="date"
            value={form.travel_date}
            onChange={(e) => update('travel_date', e.target.value)}
            className="lux-input"
          />
        </Field>
        <Field label="Budget">
          <Select
            value={form.budget}
            onChange={(v) => update('budget', v)}
            options={budgetOptions}
            placeholder="Select budget"
          />
        </Field>
        <Field label="Number of Travelers">
          <Select
            value={form.travelers}
            onChange={(v) => update('travelers', v)}
            options={travelerOptions}
            placeholder="Select travelers"
          />
        </Field>
        <Field label="Hotel Preference">
          <Select
            value={form.hotel_preference}
            onChange={(v) => update('hotel_preference', v)}
            options={hotelOptions}
            placeholder="Select preference"
          />
        </Field>
        <Field label="WhatsApp Number" required>
          <input
            type="tel"
            value={form.whatsapp_number}
            onChange={(e) => update('whatsapp_number', e.target.value)}
            placeholder="e.g. +91 9321414441"
            className="lux-input"
            required
          />
        </Field>
        <Field label="Preferred Contact Method">
          <Select
            value={form.preferred_contact}
            onChange={(v) => update('preferred_contact', v)}
            options={contactOptions}
            placeholder="Select method"
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Special Requirements">
          <textarea
            value={form.special_requirements}
            onChange={(e) => update('special_requirements', e.target.value)}
            placeholder="Honeymoon surprise, diet preferences, accessibility, activities..."
            rows={3}
            className="lux-input resize-none"
          />
        </Field>
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm font-medium text-destructive">
          Please enter at least a destination or WhatsApp number.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-lux-primary w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Inquiry
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          Your inquiry is sent via <MessageCircle className="inline h-3.5 w-3.5 text-green-600" /> WhatsApp
          {' '}& <Mail className="inline h-3.5 w-3.5 text-luxury" /> Email.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/70">
        {label} {required && <span className="text-luxury">*</span>}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="lux-input cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-9"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230B1F3A' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
