import { useState } from 'react';
import type { FormEvent } from 'react';
import { Card, PageHeader, SectionHeading, TodoBadge } from '@/components/ui';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { cx } from '@/lib/cx';

/**
 * Formulaire Formspree — aucun backend.
 *
 * L'ID vient de VITE_FORMSPREE_ID. Il est public par conception (il finit dans
 * le bundle JS) : ce n'est pas un secret, seulement un identifiant de boite de
 * reception. Voir .env.example.
 */
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormValues = { name: '', email: '', subject: '', message: '' };

function validate(values: FormValues): Partial<Record<keyof FormValues, string>> {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That address is missing an @ or a domain.';
  }
  if (!values.subject.trim()) errors.subject = 'Add a subject.';
  if (values.message.trim().length < 20) {
    errors.message = 'Write at least 20 characters so the message has some context.';
  }

  return errors;
}

export default function Contact() {
  useDocumentMeta(
    'Contact — Nabil Elkorchi',
    'Send a message to Nabil Elkorchi about roles, internships, or project work.',
  );

  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string>('');

  const update = (field: keyof FormValues) => (event: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    // On efface l'erreur du champ des que l'utilisateur le corrige.
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Focus sur le premier champ en erreur, pour la navigation clavier.
      const firstField = Object.keys(found)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    if (!ENDPOINT) {
      setStatus('error');
      setServerError(
        'The form is not connected yet. Set VITE_FORMSPREE_ID in your .env.local file.',
      );
      return;
    }

    setStatus('submitting');
    setServerError('');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          // Formspree utilise _subject comme objet de l'e-mail recu.
          _subject: values.subject.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setValues(EMPTY);
        return;
      }

      const data: { errors?: { message: string }[] } = await response.json().catch(() => ({}));
      setStatus('error');
      setServerError(
        data.errors?.map((e) => e.message).join(' ') ??
          'The message could not be sent. Try again in a moment.',
      );
    } catch {
      setStatus('error');
      setServerError('The message could not be sent. Check your connection and try again.');
    }
  }

  return (
    <div className="shell py-8 sm:py-12">
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        intro="Open to design engineering roles and internships in Massachusetts. Send a message and it lands directly in my inbox."
      />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <Card>
          <SectionHeading eyebrow="Message" title="Send a message" />

          {/* Confirmation inline : remplace le formulaire une fois l'envoi reussi. */}
          {status === 'success' ? (
            <div
              role="status"
              className="rounded-md border border-accent/30 bg-accent-wash p-6 text-center"
            >
              <div
                aria-hidden="true"
                className="mx-auto grid h-11 w-11 place-items-center rounded-full border-2 border-accent-line"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-5 w-5 text-accent"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
                Message sent
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
                Thanks for reaching out. You will get a reply at the address you provided, usually
                within a couple of days.
              </p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-5">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Piege a robots : invisible pour l'utilisateur, rempli par les bots.
                  Formspree rejette automatiquement les envois ou _gotcha est rempli.
                  Coute zero et n'ajoute aucune friction — supprimable si non voulu. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={cx('field', errors.name && 'field-invalid')}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={cx('field', errors.email && 'field-invalid')}
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={update('subject')}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={cx('field', errors.subject && 'field-invalid')}
                  placeholder="Structural design internship — Summer 2027"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={values.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  className={cx('field resize-y', errors.message && 'field-invalid')}
                  placeholder="A few lines about the role or the project."
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                ) : (
                  <p id="message-hint" className="mt-1.5 font-mono text-meta text-ink-faint">
                    {values.message.trim().length} characters
                  </p>
                )}
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
                >
                  {serverError}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'submitting'} className="btn-primary">
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                {!FORMSPREE_ID && <TodoBadge label="Formspree ID missing" />}
              </div>
            </form>
          )}
        </Card>

        <Card delay={40}>
          <SectionHeading eyebrow="Details" title="What to expect" />
          <ul className="space-y-4 text-[0.9375rem] leading-relaxed text-ink-muted">
            <li className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-line"
              />
              <span>Messages go straight to my inbox — there is no database behind this site.</span>
            </li>
            <li className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-line"
              />
              <span>Include the role, the location, and a timeline if you are hiring.</span>
            </li>
            <li className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-line"
              />
              <span>Based in Worcester, Massachusetts. Open to roles across the state.</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
