import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { useReveal } from '@/hooks/useReveal';

/* ---------------------------------------------------------------------------
   Icones inline. Pas de librairie d'icones : cinq traits SVG suffisent et
   evitent 40 ko de dependance pour un site de quatre pages.
   --------------------------------------------------------------------------- */

type IconProps = { className?: string };

export const IconSun = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
    />
  </svg>
);

export const IconMoon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
    />
  </svg>
);

export const IconDownload = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
    />
  </svg>
);

export const IconArrow = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
  </svg>
);

export const IconChevron = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

export const IconPin = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
    />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/* ---------------------------------------------------------------------------
   Badge "To complete" : rend un placeholder impossible a confondre avec une
   information reelle. Il disparait des que isPlaceholder passe a false.
   --------------------------------------------------------------------------- */

export function TodoBadge({ label = 'To complete' }: { label?: string }) {
  return (
    <span className="badge-todo" title="Placeholder content — not real data yet.">
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent-line" />
      {label}
    </span>
  );
}

/* ---------------------------------------------------------------------------
   Carte revelee au scroll.
   --------------------------------------------------------------------------- */

export function Card({
  children,
  className,
  delay = 0,
  as: Tag = 'section',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'section' | 'article' | 'div';
}) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={ref as never} className={cx('card reveal p-6 sm:p-8', className)}>
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   En-tete de section : eyebrow mono + titre + filet a tick (cote de plan).
   --------------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          {eyebrow && <p className="eyebrow mb-1.5">{eyebrow}</p>}
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {title}
          </h2>
        </div>
        {action}
      </div>
      <div className="rule-tick mt-4" />
    </header>
  );
}

/* ---------------------------------------------------------------------------
   Pill de competence.
   --------------------------------------------------------------------------- */

export function Pill({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return <li className={cx('pill', accent && 'pill-accent')}>{children}</li>;
}

/* ---------------------------------------------------------------------------
   Page header : bandeau commun aux pages internes.
   --------------------------------------------------------------------------- */

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">{intro}</p>
      )}
      <div className="rule-tick mt-6" />
    </div>
  );
}
