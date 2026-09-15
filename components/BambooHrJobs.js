'use client'

import { useEffect, useRef } from 'react'

/**
 * BambooHR careers embed. Their script scans for #BambooHR on load and injects the
 * live GLCM job list into it. Next.js keeps the DOM across client navigations, so
 * the script is appended once per mount and removed on unmount to avoid duplicates.
 */
export default function BambooHrJobs({ domain = 'guidinglightchristianmontessori.bamboohr.com' }) {
  const mount = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://${domain}/js/embed.js`
    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      script.remove()
      if (mount.current) mount.current.innerHTML = ''
    }
  }, [domain])

  return (
    <div className="rounded-[2rem] border border-ink/5 bg-white p-6 shadow-soft sm:p-9">
      <div ref={mount} id="BambooHR" data-domain={domain} data-version="1.0.0" data-departmentid="" />
      <noscript>
        <p className="text-[0.95rem] text-ink-400">
          Please enable JavaScript to view our current openings, or email us and we will send them across.
        </p>
      </noscript>
    </div>
  )
}
