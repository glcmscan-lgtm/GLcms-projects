import Reveal from '@/components/Reveal'

export default function LegalDoc({ doc }) {
  return (
    <div className="container-x mx-auto max-w-3xl py-20">
      <Reveal>
        <p className="display text-[1.25rem] leading-snug text-ink">{doc.intro}</p>
      </Reveal>

      <div className="mt-12 space-y-10">
        {doc.sections.map((section, i) => (
          <Reveal key={section.heading} delay={Math.min(i, 5) * 60}>
            <section className="rounded-[1.75rem] border border-ink/5 bg-white p-7 shadow-soft sm:p-9">
              <h2 className="display text-[1.3rem] text-ink">{section.heading}</h2>
              {section.paras?.map((p) => (
                <p key={p} className="mt-4 text-[0.97rem] leading-relaxed text-ink-400">
                  {p}
                </p>
              ))}
              {section.items ? (
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink-400">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-12 rounded-[1.75rem] bg-sand p-7 text-[0.97rem] leading-relaxed text-ink-600 sm:p-9">
          {doc.outro}
        </p>
      </Reveal>
    </div>
  )
}
