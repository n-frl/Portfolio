import { Card, PageHeader, Pill, SectionHeading, TodoBadge } from '@/components/ui';
import { experienceSorted } from '@/data/experience';
import { credentials, education, involvement } from '@/data/education';
import { projects } from '@/data/projects';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import type { ExperienceItem } from '@/data/types';

/**
 * Element de la frise. La colonne de gauche reprend le vocabulaire d'un profil
 * en long : un rail vertical, un repere par poste. Le rail est cyan pur - c'est
 * un trait, pas du texte, donc le contraste n'est pas un probleme.
 */
function TimelineEntry({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  return (
    <li className="relative flex gap-5 pb-8 last:pb-0">
      {/* Rail + repere */}
      <div className="relative flex w-3 shrink-0 justify-center" aria-hidden="true">
        {!isLast && <span className="absolute top-4 h-full w-px bg-line" />}
        <span
          className={
            item.isPlaceholder
              ? 'relative mt-1.5 h-3 w-3 rounded-full border-2 border-dashed border-line-strong bg-surface'
              : 'relative mt-1.5 h-3 w-3 rounded-full border-2 border-accent-line bg-surface'
          }
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
            {item.role}
          </h3>
          {item.isPlaceholder && <TodoBadge />}
        </div>

        <p className="mt-0.5 text-[0.9375rem] text-ink">{item.company}</p>

        <p className="mt-1 font-mono text-meta text-ink-faint">
          {item.period} · {item.employmentType} · {item.location}
        </p>

        <ul className="mt-4 space-y-2.5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-line"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {item.tools.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <Pill key={tool}>{tool}</Pill>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  useDocumentMeta(
    'Experience — Nabil Elkorchi',
    'Internships, education, credentials, and engineering projects of Nabil Elkorchi.',
  );

  return (
    <div className="shell py-8 sm:py-12">
      <PageHeader
        eyebrow="Career"
        title="Experience"
        intro="Field survey work, owner-side project delivery, and coursework — in reverse chronological order."
      />

      <div className="space-y-5 sm:space-y-6">
        {/* --- Expériences --------------------------------------------------- */}
        <Card>
          <SectionHeading eyebrow="Professional" title="Internships" />
          <ol className="mt-2">
            {experienceSorted.map((item, i) => (
              <TimelineEntry key={item.id} item={item} isLast={i === experienceSorted.length - 1} />
            ))}
          </ol>
        </Card>

        {/* --- Formation ------------------------------------------------------ */}
        <Card delay={40}>
          <SectionHeading eyebrow="Academic" title="Education" />
          <ul className="space-y-6">
            {education.map((item) => (
              <li key={item.id}>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
                    {item.institution}
                  </h3>
                  {item.isPlaceholder && <TodoBadge />}
                </div>
                <p className="mt-0.5 text-[0.9375rem] text-ink-muted">
                  {item.degree}, {item.field}
                </p>
                <p className="mt-1 font-mono text-meta text-ink-faint">
                  {item.period} · {item.location}
                </p>
                {item.details.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <Pill key={detail}>{detail}</Pill>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Card>

        {/* --- Certifications et engagement ----------------------------------- */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <Card delay={60}>
            <SectionHeading eyebrow="Credentials" title="Licenses & certifications" />
            <ul className="space-y-4">
              {credentials.map((item) => (
                <li key={item.id}>
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{item.issuer}</p>
                  <p className="mt-1.5 flex flex-wrap items-center gap-2 font-mono text-meta text-ink-faint">
                    Issued {item.issued}
                    {item.isPlaceholder && <TodoBadge label="Date" />}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card delay={80}>
            <SectionHeading eyebrow="Community" title="Involvement" />
            <ul className="space-y-4">
              {involvement.map((item) => (
                <li key={item.id}>
                  <p className="font-medium text-ink">{item.role}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{item.organization}</p>
                  <p className="mt-1.5 flex flex-wrap items-center gap-2 font-mono text-meta text-ink-faint">
                    {item.period}
                    {item.isPlaceholder && <TodoBadge label="Dates" />}
                  </p>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* --- Projets --------------------------------------------------------- */}
        <Card delay={100}>
          <div id="projects" className="scroll-mt-24" />
          <SectionHeading eyebrow="Portfolio" title="Projects" />
          <ul className="space-y-8">
            {projects.map((project) => (
              <li key={project.id} className="border-l-2 border-line pl-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  {project.isPlaceholder && <TodoBadge />}
                </div>

                <p className="mt-1 font-mono text-meta text-ink-faint">
                  {project.context} · {project.period}
                </p>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-3 space-y-2">
                  {project.contributions.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-line"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Pill key={tool}>{tool}</Pill>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
