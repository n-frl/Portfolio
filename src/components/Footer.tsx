import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-line bg-surface-2">
      <div className="shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-meta text-ink-faint">© {year} Nabil Elkorchi</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            <li>
              <Link to="/experience" className="transition-colors hover:text-accent">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/skills" className="transition-colors hover:text-accent">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
