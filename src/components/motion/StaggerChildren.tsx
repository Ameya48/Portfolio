import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  },
});

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * StaggerChildren — wraps a list and staggers each child's entrance animation.
 * Children should be wrapped in `<motion.div variants={itemVariants}>`.
 */
export function StaggerChildren({
  children,
  staggerDelay = 0.08,
  className,
}: StaggerChildrenProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={containerVariants(reduced ? 0 : staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
}
