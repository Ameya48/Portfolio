import { useEffect, useRef, useState } from 'react';

/**
 * BlinkAvatar
 * -----------
 * Swaps between a normal PNG and a closed-eye PNG at random intervals
 * to simulate natural blinking. Zero CSS animation, zero overlays.
 * No floating, no transforms — just two images toggled in-place.
 */

interface BlinkAvatarProps {
  /** Path to the normal (eyes open) image */
  src: string;
  /** Path to the blink (eyes closed) image — must be same dimensions/pose */
  blinkSrc: string;
  alt: string;
  /** Classes on the <img> element */
  imgClassName?: string;
  /** Average seconds between blinks — randomised ±1s */
  blinkInterval?: number;
  /** Duration of the blink in ms (how long eyes stay closed) */
  blinkDuration?: number;
  /** Mirror the avatar horizontally */
  mirrored?: boolean;
}

export default function BlinkAvatar({
  src,
  blinkSrc,
  alt,
  imgClassName = '',
  blinkInterval = 3.5,
  blinkDuration = 130,
  mirrored = false,
}: BlinkAvatarProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = (blinkInterval + (Math.random() * 2 - 1)) * 1000;
      timer.current = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleNext();
        }, blinkDuration);
      }, delay);
    };
    scheduleNext();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [blinkInterval, blinkDuration]);

  return (
    <div style={mirrored ? { display: 'inline-block', transform: 'scaleX(-1)' } : undefined}>
      <img
        src={isBlinking ? blinkSrc : src}
        alt={alt}
        className={imgClassName}
      />
    </div>
  );
}
