import { useEffect, useRef, useState } from 'react';

/**
 * LiveAvatar
 * ----------
 * Smoothly blends between open-eye and closed-eye PNG frames in-place.
 * Stacked layers ensure zero image flicker, zero white background gaps,
 * and zero layout shifts.
 */

interface LiveAvatarProps {
  /** Path to the normal (eyes open) image */
  src: string;
  /** Path to the blink (eyes closed) image */
  blinkSrc: string;
  alt: string;
  /** Classes on the <img> elements */
  imgClassName?: string;
  /** Average seconds between blinks — randomised (default ~5.5s) */
  blinkInterval?: number;
  /** Duration of the blink in ms (default 220ms for natural human blink) */
  blinkDuration?: number;
  /** Mirror the avatar horizontally */
  mirrored?: boolean;
}

export default function LiveAvatar({
  src,
  blinkSrc,
  alt,
  imgClassName = '',
  blinkInterval = 5.5,
  blinkDuration = 220,
  mirrored = false,
}: LiveAvatarProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scheduleNext = () => {
      // Natural human blink timing (approx 4.0s - 7.0s)
      const delay = (blinkInterval + (Math.random() * 3 - 1.5)) * 1000;
      timerRef.current = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleNext();
        }, blinkDuration);
      }, delay);
    };
    scheduleNext();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [blinkInterval, blinkDuration]);

  return (
    <div
      className="relative inline-block"
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Base Open-Eye Image */}
      <img
        src={src}
        alt={alt}
        className={imgClassName}
      />

      {/* Stacked Closed-Eye Blink Layer */}
      <img
        src={blinkSrc}
        alt={`${alt} blink`}
        className={`${imgClassName} absolute inset-0 pointer-events-none transition-opacity duration-75 ease-in-out`}
        style={{ opacity: isBlinking ? 1 : 0 }}
      />
    </div>
  );
}
