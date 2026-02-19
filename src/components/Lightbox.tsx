import { useEffect, useCallback, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const SWIPE_THRESHOLD = 50;

const Lightbox = ({ src, alt, onClose, onPrev, onNext }: LightboxProps) => {
  const touchStartX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitDir, setExitDir] = useState<"left" | "right" | null>(null);
  const isAnimating = useRef(false);

  // Скидаємо анімацію при зміні src (нове фото прийшло)
  useEffect(() => {
    setExitDir(null);
    setDragOffset(0);
    isAnimating.current = false;
  }, [src]);

  const navigate = useCallback(
    (dir: "prev" | "next") => {
      if (isAnimating.current) return;
      const callback = dir === "next" ? onNext : onPrev;
      if (!callback) return;

      isAnimating.current = true;
      setExitDir(dir === "next" ? "left" : "right");

      setTimeout(() => {
        callback();
        // src зміниться → useEffect скине анімацію
      }, 280);
    },
    [onNext, onPrev]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) navigate("prev");
      if (e.key === "ArrowRight" && onNext) navigate("next");
    },
    [onClose, onPrev, onNext, navigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (isAnimating.current) return;
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    // Обмежуємо драг якщо немає сусіднього фото
    if (diff > 0 && !onPrev) return;
    if (diff < 0 && !onNext) return;
    setDragOffset(diff);
  }, [onPrev, onNext]);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      setIsDragging(false);
      touchStartX.current = null;

      if (Math.abs(diff) >= SWIPE_THRESHOLD) {
        if (diff > 0 && onNext) {
          navigate("next");
        } else if (diff < 0 && onPrev) {
          navigate("prev");
        } else {
          setDragOffset(0);
        }
      } else {
        setDragOffset(0);
      }
    },
    [onPrev, onNext, navigate]
  );

  const getTransform = () => {
    if (exitDir === "left") return "translateX(-110%)";
    if (exitDir === "right") return "translateX(110%)";
    if (dragOffset !== 0) return `translateX(${dragOffset}px)`;
    return "translateX(0)";
  };

  const getTransition = () => {
    if (isDragging) return "none";
    return "transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Закрити"
      >
        <X size={24} />
      </button>

      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
          className="absolute left-4 md:left-8 z-10 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          aria-label="Попереднє"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate("next"); }}
          className="absolute right-4 md:right-8 z-10 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          aria-label="Наступне"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <img
        key={src}
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain select-none"
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: getTransform(),
          transition: getTransition(),
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default Lightbox;
