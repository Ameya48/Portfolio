import { useEffect, useState, useRef } from 'react';
import { isBrowser } from '@/lib/utils';

/**
 * Tracks which section is currently in the viewport using IntersectionObserver.
 * @param sectionIds - array of element IDs to observe
 * @param rootMargin - IntersectionObserver rootMargin, defaults to "-40% 0px -55% 0px"
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin = '-40% 0px -55% 0px',
): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!isBrowser) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
}
