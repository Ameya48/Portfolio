import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  accent?: boolean;
}

/**
 * Divider — hairline separator. Used between sections and in cards.
 */
export function Divider({
  className,
  orientation = 'horizontal',
  accent = false,
}: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        orientation === 'horizontal'
          ? 'w-full h-px'
          : 'h-full w-px',
        accent
          ? 'bg-[var(--color-accent)]'
          : 'bg-[var(--color-border)]',
        className,
      )}
    />
  );
}
