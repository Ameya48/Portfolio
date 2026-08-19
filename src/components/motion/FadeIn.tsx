import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { MotionProps } from '@/types';

/**
 * FadeIn — fades children in on mount or scroll trigger.
 * Respects prefers-reduced-motion.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: MotionProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
