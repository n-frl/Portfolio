import { Link } from 'react-router-dom';
import { ProfileBanner } from '@/components/ProfileBanner';
import { Card, IconArrow, Pill, SectionHeading, TodoBadge } from '@/components/ui';
import { profile, quickFacts } from '@/data/profile';
import { experienceSorted } from '@/data/experience';
import { education } from '@/data/education';
import { projects } from '@/data/projects';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function Home() {
  useDocumentMeta(
    'Nabil Elkorchi — Civil & Environmental Engineering',
    'Portfolio of Nabil Elkorchi, civil and environmental engineering student at UMass Amherst.',
  );

  // On n'affiche que les deux experiences les plus recentes sur l'accueil.
  const featuredExperience = experienceSorted.slice(0, 2);
  const featuredProject = projects[0];

  return (
    <div className="shell space-y-5 py-6 sm:space-y-6 sm:py-10">
      <ProfileBanner />

      {/* --- Faits rapides : bandeau de reperes, style cartouche de plan ----- */}
      <Card className="!p-0" delay={40}>
        <dl className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-line p-5 last:border-b-0 sm:border-b-0"
            >
              <dt className="eyebrow mb-1.5">{fact.label}</dt>
              <dd className="text-[0.9375rem] font-medium text-ink">
                {fact.value}
                {fact.isPlaceholder && (
                  <span className="mt-1.5 block">
                    <TodoBadge />
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Card>

      {/* --- About ---------------------------------------------------------- */}
      <Card delay={60}>
        <SectionHeading eyebrow="Profile" title="About" />
        <div className="space-y-4 text-[0.9375rem] leading-relaxed text-ink-muted">
          {profile.about.map((paragraph, i) => {
            const isPlaceholder = paragraph.trim().startsWith('[');
            return (
              <p key={i} className={isPlaceholder ? 'flex flex-wrap items-start gap-2' : undefined}>
                {isPlaceholder && <TodoBadge />}
                <span>{paragraph}</span>
              </p>
            );
          })}
        </div>
      </Card>

      {/* --- Aperçu du parcours --------------------------------------------- */}
      <Card delay={80}>
        <SectionHeading
          eyebrow="Recent"
          title="Experience"
          action={
            <Link to="/experience" className="link inline-flex items-center gap-1.5 text-sm">
              Full timeline
              <IconArrow className="h-3.5 w-3.5" />
            </Link>
          }
        />

        <ul className="space-y-5">
          {featuredExperience.map((item) => (
            <li key={item.id} className="flex gap-4">
              {/* Repere de file, comme une bulle de plan */}
              <span
                aria-hidden="true"
                className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded border border-line bg-surface-2 font-mono text-[0.6875rem] text-ink-faint"
              >
                {item.company.trim().charAt(0) === '[' ? '?' : item.company.trim().charAt(0)}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-ink">{item.role}</h3>
                  {item.isPlaceholder && <TodoBadge />}
                </div>
                <p className="text-sm text-ink-muted">
                  {item.company} · {item.location}
                </p>
                <p className="mt-0.5 font-mono text-meta text-ink-faint">{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* --- Formation ------------------------------------------------------ */}
      <Card delay={100}>
        <SectionHeading eyebrow="Education" title="University of Massachusetts Amherst" />
        {education
          .filter((item) => !item.isPlaceholder)
          .map((item) => (
            <div key={item.id}>
              <p className="text-[0.9375rem] text-ink">
                {item.degree}, {item.field}
              </p>
              <p className="mt-0.5 text-sm text-ink-muted">{item.location}</p>
              <p className="mt-1 font-mono text-meta text-ink-faint">{item.period}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <Pill key={detail} accent>
                    {detail}
                  </Pill>
                ))}
              </ul>
            </div>
          ))}
      </Card>

      {/* --- Projet mis en avant -------------------------------------------- */}
      <Card delay={120}>
        <SectionHeading
          eyebrow="Selected work"
          title={featuredProject.title}
          action={
            <Link
              to="/experience#projects"
              className="link inline-flex items-center gap-1.5 text-sm"
            >
              All projects
              <IconArrow className="h-3.5 w-3.5" />
            </Link>
          }
        />
        {featuredProject.isPlaceholder && (
          <p className="mb-3">
            <TodoBadge />
          </p>
        )}
        <p className="text-sm text-ink-muted">{featuredProject.context}</p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
          {featuredProject.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {featuredProject.tools.map((tool) => (
            <Pill key={tool}>{tool}</Pill>
          ))}
        </ul>
      </Card>

    </div>
  );
}
