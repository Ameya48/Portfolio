import { ArrowUpRight, Mail } from 'lucide-react';
import { Divider } from '@/components/ui/Divider';
import { portfolioData } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  GitHub:   <ArrowUpRight size={14} />,
  LinkedIn: <ArrowUpRight size={14} />,
  Email:    <Mail size={14} />,
};

/**
 * Footer — minimal, copyright, social links.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="w-full">
      <Divider />
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-[12px] font-mono text-[var(--color-text-tertiary)]">
          © {year} {portfolioData.person.name}. Built with React & Vite.
        </p>

        {/* Social links */}
        <nav aria-label="Social links" className="flex items-center gap-1">
          {portfolioData.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] text-[12px] font-mono text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all duration-[var(--duration-fast)]"
            >
              {iconMap[social.label] ?? null}
              <span>{social.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
