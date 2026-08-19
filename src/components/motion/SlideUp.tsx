import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { MotionProps } from '@/types';

/**
 * SlideUp — slides and fades children in from below on scroll.
 * Respects prefers-reduced-motion.
 */
export function SlideUp({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: MotionProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
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
