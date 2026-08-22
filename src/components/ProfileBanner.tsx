import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { withBase } from '@/lib/base';
import { IconDownload, IconPin, TodoBadge } from './ui';

/**
 * SIGNATURE VISUELLE DU SITE.
 *
 * Le bandeau n'est pas un degrade decoratif : c'est une trame de coffrage,
 * telle qu'on la trouve sur un plan de structure. Traits fins cyan, bulles de
 * reperage alphanumeriques (A/B/C, 1/2/3), cote horizontale avec ticks.
 * C'est le seul endroit ou #00FFFF est utilise a pleine intensite.
 */
function BlueprintBanner() {
  const columnLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="relative h-32 overflow-hidden bg-surface-2 sm:h-40" aria-hidden="true">
      {/* Trame de fond */}
      <div className="blueprint-grid absolute inset-0 opacity-60 dark:opacity-40" />

      {/* Bulles de reperage des files de poteaux */}
      <div className="absolute inset-x-0 top-3 hidden sm:block">
        {columnLabels.map((label, i) => (
          <span
            key={label}
            className="absolute grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-accent-line/70 bg-canvas font-mono text-[0.625rem] font-medium text-ink-muted"
            style={{ left: `${(i + 1) * 112 - 56}px` }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Ligne de cote en bas du bandeau */}
      <div className="absolute inset-x-0 bottom-5 hidden items-center px-1 sm:flex">
        <div className="relative h-px flex-1 bg-accent-line/60">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-accent-line"
              style={{ left: `${i * 112}px` }}
            />
          ))}
        </div>
      </div>

      {/* Degrade de fondu vers la carte de profil */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent" />
    </div>
  );
}

/** Avatar anonyme, en attendant une photo professionnelle. */
function AvatarPlaceholder() {
  return (
    <div
      className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full border-4 border-surface bg-surface-2 shadow-card sm:h-28 sm:w-28"
      role="img"
      aria-label="Profile photo placeholder"
    >
      <div className="blueprint-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <svg
        viewBox="0 0 48 48"
        className="relative h-12 w-12 text-ink-faint"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="24" cy="17" r="8" />
        <path strokeLinecap="round" d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" />
      </svg>
    </div>
  );
}

export function ProfileBanner() {
  return (
    <section className="card overflow-hidden p-0">
      <BlueprintBanner />

      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <div className="-mt-14 sm:-mt-16">
          <AvatarPlaceholder />
        </div>

        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h1 className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.125rem]">
              {profile.fullName}
            </h1>

            <p className="mt-1.5 text-[1.0625rem] leading-snug text-ink">{profile.headline}</p>

            <p className="mt-2 flex items-start gap-2 text-sm text-ink-muted">
              <TodoBadge label="Tagline" />
              <span className="min-w-0">{profile.tagline}</span>
            </p>

            <p className="mt-3 flex items-center gap-1.5 font-mono text-meta text-ink-faint">
              <IconPin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>

          {/* Actions principales */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={withBase(profile.resumePath)}
              download={profile.resumeFileName}
              className="btn-primary"
            >
              <IconDownload className="h-4 w-4" />
              Download resume
            </a>
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>

        {/* Liens externes */}
        <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4">
          {profile.links.map((link) => (
            <li key={link.label} className="flex items-center gap-2">
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link to={link.href} className="link text-sm">
                  {link.label}
                </Link>
              )}
              {link.isPlaceholder && <TodoBadge label="Not set up" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
