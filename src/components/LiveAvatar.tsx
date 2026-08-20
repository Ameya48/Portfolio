import { useEffect, useRef, useState } from 'react';

/**
 * LiveAvatar – wraps a static PNG avatar and layers on lifelike
 * micro-animations: breathing, typing bob, coffee sipping, eye blinking,
 * and a pulsing ground shadow.
 */

type AnimationType = 'breathing' | 'typing' | 'sipping' | 'gesturing' | 'reading';

interface EyePosition {
  top: string;
  left: string;
  width: string;
  height: string;
}

interface LiveAvatarProps {
  src: string;
  alt: string;
  /** Classes applied directly to the <img> element */
  imgClassName?: string;
  /** Classes applied to the outermost wrapper div */
  wrapperClassName?: string;
  /** The idle / activity animation to loop */
  animation?: AnimationType;
  /** Show eye-blink overlay? */
  enableBlink?: boolean;
  /** Mirror the avatar horizontally (replaces scale-x-[-1] on the img) */
  mirrored?: boolean;
  /** Left eye overlay position (% of image) */
  leftEye?: EyePosition;
  /** Right eye overlay position (% of image) */
  rightEye?: EyePosition;
  /** Average seconds between blinks (randomised ±1 s) */
  blinkInterval?: number;
  /** Show a breathing ground-shadow beneath the avatar */
  showGroundShadow?: boolean;
  /** Override the animation duration in seconds */
  animationDuration?: number;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function LiveAvatar({
  src,
  alt,
  imgClassName = '',
  wrapperClassName = '',
  animation = 'breathing',
  enableBlink = true,
  mirrored = false,
  leftEye,
  rightEye,
  blinkInterval = 3.5,
  showGroundShadow = false,
  animationDuration,
}: LiveAvatarProps) {
  /* ---- blink state driven by JS for random cadence ---- */
  const [isBlinking, setIsBlinking] = useState(false);
  const blinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enableBlink || !leftEye || !rightEye) return;

    const scheduleNextBlink = () => {
      const delay = (blinkInterval + (Math.random() * 2 - 1)) * 1000;
      blinkTimer.current = setTimeout(() => {
        setIsBlinking(true);
        openTimer.current = setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink();
        }, 110 + Math.random() * 90); // 110-200 ms closed
      }, delay);
    };

    scheduleNextBlink();

    return () => {
      if (blinkTimer.current) clearTimeout(blinkTimer.current);
      if (openTimer.current) clearTimeout(openTimer.current);
    };
  }, [enableBlink, leftEye, rightEye, blinkInterval]);

  /* ---- pick CSS animation name ---- */
  const defaultDurations: Record<AnimationType, number> = {
    breathing: 4,
    typing:    5,    // slow float — not a fast shake
    sipping:   6,    // overridden to 4s in Contact via animationDuration prop
    gesturing: 5,
    reading:   6,
  };
  const duration = animationDuration ?? defaultDurations[animation];
  const animationCSS: React.CSSProperties = {
    animation: `${{ breathing: 'avatar-breathe', typing: 'avatar-type', sipping: 'avatar-sip', gesturing: 'avatar-gesture', reading: 'avatar-read' }[animation]} ${duration}s ease-in-out infinite`,
    transformOrigin: 'center bottom',
  };

  const SKIN = '#7B5A3C'; // warm brown matching the character

  /* ---- single eye overlay ---- */
  const EyeLid = ({ pos }: { pos: EyePosition }) => (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        top: pos.top,
        left: pos.left,
        width: pos.width,
        height: isBlinking ? pos.height : '0%',
        backgroundColor: SKIN,
        transition: isBlinking
          ? 'height 0.06s ease-in'   // close fast
          : 'height 0.10s ease-out', // open a touch slower
        transformOrigin: 'center top',
        zIndex: 20,
      }}
    />
  );

  return (
    <div className={`relative inline-flex flex-col items-center ${wrapperClassName}`}>
      {/* mirror wrapper — only sets scaleX, never touched by CSS animation */}
      <div style={{ transform: mirrored ? 'scaleX(-1)' : undefined }}>
        {/* animation wrapper — drives the float/sip/etc on its own transform */}
        <div className="relative" style={animationCSS}>
          <img src={src} alt={alt} className={imgClassName} />
          {/* eye overlays */}
          {enableBlink && leftEye && <EyeLid pos={leftEye} />}
          {enableBlink && rightEye && <EyeLid pos={rightEye} />}
        </div>
      </div>

      {/* optional breathing ground shadow */}
      {showGroundShadow && (
        <div
          className="rounded-[50%] pointer-events-none"
          style={{
            width: '60%',
            height: '6px',
            marginTop: '-4px',
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
            animation: 'avatar-shadow-breathe 3.5s ease-in-out infinite',
          }}
        />
      )}
    </div>
  );
}
