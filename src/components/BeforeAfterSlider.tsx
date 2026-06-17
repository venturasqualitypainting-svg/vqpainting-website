import { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  labelBeforeEn?: string;
  labelBeforeEs?: string;
  labelAfterEn?: string;
  labelAfterEs?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  labelBeforeEn = 'Before',
  labelBeforeEs = 'Antes',
  labelAfterEn = 'After',
  labelAfterEs = 'Despues',
}: BeforeAfterSliderProps) {
  const { t } = useLanguage();
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  }, [handleMove]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      return () => window.removeEventListener('touchmove', onTouchMove);
    }
  }, [isDragging, onTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Before image (full) */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-body font-medium px-3 py-1 rounded">
        {t(labelBeforeEn, labelBeforeEs)}
      </span>
      <span className="absolute top-4 right-4 bg-black/60 text-white text-xs font-body font-medium px-3 py-1 rounded">
        {t(labelAfterEn, labelAfterEs)}
      </span>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-md"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse-play">
          <MoveHorizontal className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
