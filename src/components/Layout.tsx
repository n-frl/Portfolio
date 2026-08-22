import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* Lien d'evitement : premier element focusable, exigence AA. */}
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[100] rounded bg-accent px-4 py-2 text-sm font-medium text-white"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Header />

      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
