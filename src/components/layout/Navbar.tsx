import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { navItems, portfolioData } from '@/lib/data';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const sectionIds = navItems.map((item) => item.sectionId);

/**
 * Navbar — fixed top navigation with:
 * - Monogram logo (initials)
 * - Active section highlighting via IntersectionObserver
 * - Frosted glass scroll effect
 * - "Available for work" live indicator
 * - Mobile menu (hamburger)
 * - Scroll progress bar at bottom
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-all duration-300',
          scrolled ? 'nav-scrolled' : 'bg-transparent',
        )}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo — Monogram */}
          <a
            href="#"
            aria-label={`${portfolioData.person.name} — back to top`}
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center transition-all duration-[var(--duration-normal)] group-hover:border-[var(--color-accent)] group-hover:shadow-[var(--shadow-accent)]">
              <span className="font-mono text-[12px] font-medium text-[var(--color-text-primary)] tracking-tight">
                {portfolioData.person.initials}
              </span>
            </div>
            <span className="hidden sm:block text-[13px] font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)]">
              {portfolioData.person.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'px-4 py-2 rounded-[var(--radius-md)] text-[13px] font-medium transition-all duration-[var(--duration-fast)]',
                  activeSection === item.sectionId
                    ? 'text-[var(--color-text-primary)] bg-[var(--color-surface-2)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]',
                )}
                aria-current={activeSection === item.sectionId ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side — status + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {portfolioData.person.availableForWork && (
              <div className="flex items-center gap-2" aria-label="Available for work">
                <span className="dot-live" />
                <span className="text-[12px] font-mono text-[var(--color-text-secondary)]">
                  Available
                </span>
              </div>
            )}
            <Button
              variant="accent"
              size="sm"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-[var(--radius-md)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors duration-[var(--duration-fast)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-px bg-[var(--color-border)] w-full">
          <div
            className="h-full bg-[var(--color-accent)] transition-[width] duration-75 ease-linear"
            style={{ width: `${scrollProgress * 100}%` }}
            role="progressbar"
            aria-valuenow={Math.round(scrollProgress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Page scroll progress"
          />
        </div>
      </header>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[calc(var(--z-nav)-1)] lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] p-6 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'px-4 py-3 rounded-[var(--radius-md)] text-[15px] font-medium transition-all duration-[var(--duration-fast)]',
                  activeSection === item.sectionId
                    ? 'text-[var(--color-text-primary)] bg-[var(--color-surface-2)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]',
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              <Button variant="accent" size="md" href="#contact" className="w-full">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
