import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta('Page not found — Nabil Elkorchi', 'This page does not exist.');

  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        This page does not exist
      </h1>
      <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">
        The address may have changed, or the link that brought you here is out of date.
      </p>
      <Link to="/" className="btn-primary mt-7">
        Back to home
      </Link>
    </div>
  );
}
