import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const Lightbox = ({ src, alt, onClose, onPrev, onNext }: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Закрити"
      >
        <X size={24} />
      </button>

      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          aria-label="Попереднє"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          aria-label="Наступне"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
