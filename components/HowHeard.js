'use client'

import { useEffect, useState } from 'react'

// "How did you hear about us?" for every Web3Forms form, plus the hidden "Arrived from" line.
// Field names are exact so each shows as its own line in the Web3Forms email.
export const HEARD_FIELD = 'How did you hear about us'
export const HEARD_OTHER_FIELD = 'How did you hear about us (other)'
export const ARRIVED_FIELD = 'Arrived from'

const HEARD_OPTIONS = [
  'TikTok',
  'Instagram',
  'Facebook',
  'Google search',
  'Google Maps',
  'Friend or family',
  'Church',
  'Radio',
  'Newspaper or magazine',
  'Drove by',
  'Other',
]

const ARRIVED_KEY = 'glcm_arrived_from'

// Saved once, on the visitor's first page view anywhere on the site. Never overwritten.
// Example: utm_source=instagram | utm_campaign=fall | gclid=yes | fbclid=no | referrer=l.instagram.com
export function rememberArrival() {
  try {
    if (window.localStorage.getItem(ARRIVED_KEY) !== null) return
  } catch {
    return
  }
  let line = ''
  try {
    const params = new URLSearchParams(window.location.search)
    let referrer = ''
    if (document.referrer) {
      const host = new URL(document.referrer).hostname
      if (host !== window.location.hostname) referrer = host
    }
    line = [
      `utm_source=${params.get('utm_source') || ''}`,
      `utm_campaign=${params.get('utm_campaign') || ''}`,
      `gclid=${params.has('gclid') ? 'yes' : 'no'}`,
      `fbclid=${params.has('fbclid') ? 'yes' : 'no'}`,
      `referrer=${referrer}`,
    ].join(' | ')
  } catch {
    return
  }
  try {
    window.localStorage.setItem(ARRIVED_KEY, line)
  } catch {
    // Storage blocked (private mode, disabled site data). The form then sends a blank line.
  }
}

export function readArrival() {
  try {
    return window.localStorage.getItem(ARRIVED_KEY) || ''
  } catch {
    return ''
  }
}

// Mounted once in the root layout so the first page view is captured on any page.
export function ArrivalTracker() {
  useEffect(() => {
    rememberArrival()
  }, [])
  return null
}

// The Web3Forms payload lines for this question. "(other)" is only sent when Other is picked.
export function heardPayload(payload) {
  const heard = payload[HEARD_FIELD] || ''
  const lines = { [HEARD_FIELD]: heard }
  if (heard === 'Other') lines[HEARD_OTHER_FIELD] = payload[HEARD_OTHER_FIELD] || ''
  lines[ARRIVED_FIELD] = readArrival()
  return lines
}

export default function HowHeardField({ fieldClass }) {
  const [heard, setHeard] = useState('')
  const [arrived, setArrived] = useState('')

  useEffect(() => {
    // The layout tracker may not have run yet on this first view, so capture here too (it never overwrites).
    rememberArrival()
    setArrived(readArrival())
  }, [])

  return (
    <>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-[0.82rem] font-bold text-ink">How did you hear about us? *</span>
        <select
          required
          name={HEARD_FIELD}
          className={fieldClass}
          value={heard}
          onChange={(e) => setHeard(e.target.value)}
        >
          <option value="">Pick one</option>
          {HEARD_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      {heard === 'Other' ? (
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-[0.82rem] font-bold text-ink">Tell us where *</span>
          <input required name={HEARD_OTHER_FIELD} type="text" className={fieldClass} />
        </label>
      ) : null}
      <input type="hidden" name={ARRIVED_FIELD} value={arrived} />
    </>
  )
}
