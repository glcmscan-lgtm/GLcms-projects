import { NextResponse } from 'next/server'

/**
 * Contact form endpoint. Serves both the parent enquiry form (ContactForm) and
 * the job application form (CareersForm) — the `type` field tells them apart.
 *
 * Delivery goes through the Mailtrap Sending API over plain fetch, so there is no
 * extra dependency. Configured entirely by environment variables:
 *
 *   MAILTRAP_API_TOKEN   required — Sending token from the Mailtrap dashboard
 *   CONTACT_TO_EMAIL     optional — defaults to contact@glcm.net
 *   CONTACT_FROM_EMAIL   optional — must be on a domain verified in Mailtrap
 *   CONTACT_FROM_NAME    optional — display name on the sender
 *
 * If the token is missing the request fails loudly rather than quietly dropping the
 * enquiry: a silently lost message is worse than a visible error.
 */
const ENDPOINT = 'https://send.api.mailtrap.io/api/send'
const TO = process.env.CONTACT_TO_EMAIL || 'contact@glcm.net'
const FROM = process.env.CONTACT_FROM_EMAIL || 'website@glcm.net'
const FROM_NAME = process.env.CONTACT_FROM_NAME || 'Guiding Light Christian Montessori'

const LABELS = {
  receivedAt: 'Received',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  program: 'Program of interest',
  childAge: 'Child’s age',
  role: 'Role applied for',
  experience: 'Experience',
  message: 'Message',
}

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

function renderHtml(fields, heading) {
  const rows = fields
    .map(
      ([k, v]) =>
        `<tr>
           <td style="padding:8px 16px 8px 0;color:#4a6280;white-space:nowrap;vertical-align:top">${esc(
             LABELS[k] || k,
           )}</td>
           <td style="padding:8px 0;color:#0b2038">${esc(v).replace(/\n/g, '<br>')}</td>
         </tr>`,
    )
    .join('')
  return `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.5">
    <h2 style="color:#0b2038;margin:0 0 4px">${esc(heading)}</h2>
    <p style="color:#4a6280;margin:0 0 20px">Submitted through the glcm.net website.</p>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`
}

const renderText = (fields) =>
  fields.map(([k, v]) => `${LABELS[k] || k}: ${v}`).join('\n')

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const phone = (body.phone || '').trim()

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Please fill in your name, email and phone.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 })
  }

  const isApplication = (body.type || '').trim() === 'Job application'

  const fields = Object.entries({
    receivedAt: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }) + ' ET',
    name,
    email,
    phone,
    ...(isApplication
      ? {
          role: (body.role || '').trim() || 'Open to any role',
          experience: (body.experience || '').trim() || 'Not specified',
        }
      : {
          program: (body.program || '').trim() || 'Not specified',
          childAge: (body.childAge || '').trim() || 'Not specified',
        }),
    message: (body.message || '').trim() || '—',
  })

  const heading = isApplication ? 'New job application' : 'New website enquiry'
  const subject = isApplication
    ? `Job application — ${fields.find(([k]) => k === 'role')?.[1]} — ${name}`
    : `Website enquiry — ${name}`

  const token = process.env.MAILTRAP_API_TOKEN
  if (!token) {
    console.error('[glcm] MAILTRAP_API_TOKEN is not set — submission NOT delivered:', fields)
    return NextResponse.json(
      { error: 'We could not send your message right now. Please call us and we will help straight away.' },
      { status: 500 },
    )
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: { email: FROM, name: FROM_NAME },
        to: [{ email: TO }],
        subject,
        text: renderText(fields),
        html: renderHtml(fields, heading),
        // So replying in the inbox goes straight back to the family.
        headers: { 'Reply-To': email },
        category: isApplication ? 'careers' : 'enquiry',
      }),
    })

    if (!res.ok) {
      console.error('[glcm] Mailtrap rejected the message:', res.status, await res.text())
      return NextResponse.json(
        { error: 'We could not send your message right now. Please call us and we will help straight away.' },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('[glcm] Mailtrap request failed:', err)
    return NextResponse.json(
      { error: 'We could not send your message right now. Please call us and we will help straight away.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
