import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { withBase } from '@/lib/base';
import { IconDownload, IconPin, TodoBadge } from './ui';

/**
 * SIGNATURE VISUELLE DU SITE.
 *
 * Photographie de chantier au couchant (silhouette d'ouvrier, grues, ferraillage).
 * L'image est servie depuis /public/images/ et prefixee par withBase() pour
 * rester correcte quel que soit le chemin de base du site.
 *
 * Deux voiles sont superposes :
 *   - un degrade sombre en bas, pour que l'avatar et la carte se detachent ;
 *   - une trame de coffrage tres discrete, qui conserve le vocabulaire graphique
 *     du reste du site sans alourdir la photo.
 */
function HeroBanner() {
  return (
    <div
      className="relative h-40 overflow-hidden bg-surface-2 sm:h-52 lg:h-64"
      aria-hidden="true"
    >
      <img
        src={withBase('images/hero-construction.webp')}
        alt=""
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Trame de coffrage, tres legere, par-dessus la photo */}
      <div className="blueprint-grid absolute inset-0 opacity-[0.12] mix-blend-screen" />

      {/* Assombrissement du bas : lisibilite de l'avatar et raccord avec la carte */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

      {/* Filet cyan de separation, rappel du trait de cote */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-accent-line/40" />
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
      <HeroBanner />

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

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              {profile.tagline}
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
