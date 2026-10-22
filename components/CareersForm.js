'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { roles } from '@/data/careers'
import { site, web3formsKey } from '@/data/site'

const field =
  'w-full rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-400/70 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/12'

const SEND_ERROR = 'We could not send your message right now. Please call us and we will help straight away.'

export default function CareersForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `New job application from ${payload.name}`,
          from_name: 'Guiding Light Christian Montessori website',
          name: payload.name,
          email: payload.email,
          Phone: payload.phone,
          'Role applied for': payload.role || 'Open to any role',
          Experience: payload.experience || 'Not specified',
          Message: payload.message || 'None',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false) throw new Error(SEND_ERROR)
      e.target.reset()
      setStatus('sent')
    } catch {
      setError(SEND_ERROR)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-[2rem] border border-mint/30 bg-mint-soft p-10 text-center">
        <CheckCircle2 className="mx-auto size-12 text-mint" />
        <h3 className="display mt-4 text-[1.5rem] text-ink">Thank you — application received</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.96rem] leading-relaxed text-ink-600">
          We read every application ourselves and will be in touch if there is a good fit. You are
          welcome to email your résumé to{' '}
          <a href={`mailto:${site.email}`} className="font-bold text-brand">
            {site.email}
          </a>{' '}
          as well.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-[0.9rem] font-bold text-ink underline underline-offset-4"
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-ink/5 bg-white p-6 shadow-soft sm:p-9"
      id="apply"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">Your name *</span>
          <input required name="name" type="text" placeholder="Jane Doe" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">Phone *</span>
          <input required name="phone" type="tel" placeholder="(703) 000-0000" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">Email *</span>
          <input required name="email" type="email" placeholder="you@email.com" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">Role you are applying for</span>
          <select name="role" className={field} defaultValue="">
            <option value="">Open to any role</option>
            {roles.map((r) => (
              <option key={r.title} value={r.title}>
                {r.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">Years of experience</span>
          <input name="experience" type="text" placeholder="e.g. 3 years in a licensed centre" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">
            Tell us about yourself
          </span>
          <textarea
            name="message"
            rows={5}
            placeholder="Your qualifications and certifications (CPR, First Aid, MAT), and why you would like to work with us…"
            className={`${field} resize-y`}
          />
        </label>
      </div>

      {status === 'error' ? (
        <p className="mt-5 rounded-2xl bg-brand-soft px-5 py-3 text-[0.9rem] font-semibold text-brand-dark">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-[0_16px_30px_-14px_rgba(74,98,128,0.55)] transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Submit Application <Send className="size-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-[0.78rem] text-ink-400">
        Please email your résumé to {site.email} so we can attach it to your application.
      </p>
    </form>
  )
}
