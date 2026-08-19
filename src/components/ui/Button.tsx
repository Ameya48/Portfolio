import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-black hover:bg-[#e0e0e0] active:bg-[#c8c8c8]',
  secondary:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)]',
  ghost:
    'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]',
  accent:
    'bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)] active:bg-[var(--color-accent-dim)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[13px] h-8',
  md: 'px-5 py-2.5 text-[14px] h-10',
  lg: 'px-7 py-3.5 text-[15px] h-12',
};

/**
 * Button — polymorphic, can render as <a> via href prop.
 */
export function Button({
  variant = 'secondary',
  size = 'md',
  className,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-all duration-[var(--duration-fast)] cursor-pointer select-none whitespace-nowrap tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-40 disabled:cursor-not-allowed';

  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
