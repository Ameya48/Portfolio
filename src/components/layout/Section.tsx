import { cn } from '@/lib/utils';
import type { SectionProps } from '@/types';

interface ExtendedSectionProps extends SectionProps {
  label?: string;      // Mono counter label e.g. "01 / Projects"
  noPadding?: boolean;
}

/**
 * Section — semantic page section wrapper with consistent vertical rhythm.
 * Exposes an optional mono "label" for editorial section numbering.
 */
export function Section({
  id,
  className,
  children,
  label,
  noPadding = false,
}: ExtendedSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        !noPadding && 'section-padding',
        className,
      )}
    >
      <div className="container">
        {label && (
          <p className="text-label mb-10 text-[var(--color-text-tertiary)]">
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
