import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Tag — technology / skill pill. Monospace, tight border, minimal.
 */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-[var(--radius-sm)] font-mono text-[12px] text-[var(--color-text-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
