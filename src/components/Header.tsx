import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cx } from '@/lib/cx';
import { useTheme } from '@/hooks/useTheme';
import { IconMoon, IconSun } from './ui';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Le menu mobile se referme des qu'on change de page.
  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        {/* Marque : monogramme dans un cadre, comme un cartouche de plan. */}
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          aria-label="Nabil Elkorchi — home"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded border border-line-strong bg-surface-2 font-mono text-[0.8125rem] font-medium tracking-tight text-ink transition-colors group-hover:border-accent"
          >
            NE
          </span>
          <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-ink">
            Nabil Elkorchi
          </span>
        </NavLink>

        <div className="flex items-center gap-1">
          {/* Navigation bureau */}
          <nav aria-label="Main" className="hidden items-center gap-0.5 md:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cx(
                    'relative rounded px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'font-medium text-ink'
                      : 'text-ink-muted hover:bg-surface-2 hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Le trait cyan sous l'onglet actif : rappel du calque de dessin. */}
                    <span
                      aria-hidden="true"
                      className={cx(
                        'absolute inset-x-2 -bottom-px h-0.5 origin-left bg-accent-line',
                        isActive ? 'animate-draw-in' : 'scale-x-0',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-1 grid h-9 w-9 place-items-center rounded border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            {theme === 'dark' ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
          </button>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded border border-line text-ink-muted transition-colors hover:text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[1.125rem] w-[1.125rem]"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main (mobile)"
          className="border-t border-line bg-canvas md:hidden"
        >
          <ul className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cx(
                      'flex items-center gap-3 rounded px-2 py-3 text-[0.9375rem] transition-colors',
                      isActive ? 'font-medium text-ink' : 'text-ink-muted',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden="true"
                        className={cx(
                          'h-4 w-0.5 rounded-full',
                          isActive ? 'bg-accent-line' : 'bg-transparent',
                        )}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
