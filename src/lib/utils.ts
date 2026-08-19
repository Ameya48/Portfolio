// ============================================================
// UTILITIES
// ============================================================

/** Merge class names (lightweight clsx replacement) */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number {
  return (
    ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
    outputMin
  );
}

/** Format a year or year range for display */
export function formatPeriod(start: number, end?: number | 'present'): string {
  if (!end) return `${start}`;
  return `${start} – ${end === 'present' ? 'Present' : end}`;
}

/** Detect if running in a browser environment */
export const isBrowser = typeof window !== 'undefined';
