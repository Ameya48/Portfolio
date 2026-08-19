import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'accent' | 'subtle' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  accent:
    'bg-[var(--color-accent)] text-black',
  subtle:
    'bg-transparent text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]',
  outline:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-hover)]',
};

/**
 * Badge — small status / category label.
 */
export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-[var(--radius-sm)] font-mono text-[11px] tracking-[0.1em] uppercase',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
