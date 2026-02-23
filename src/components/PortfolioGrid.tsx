import { useState, useMemo } from "react";
import { categories, portfolioItems, type Category } from "@/data/portfolio";
import Lightbox from "./Lightbox";

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  };

  const goNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filtered.length - 1) setLightboxIndex(lightboxIndex + 1);
  };

  return (
    <section>
      {/* Filters */}
      <div className="flex flex-wrap gap-1 md:gap-2 mb-8 md:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`filter-button ${
              activeCategory === cat.key ? "filter-button-active" : "filter-button-inactive"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 landscape:columns-2 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className="break-inside-avoid cursor-pointer group overflow-hidden"
            onClick={() => openLightbox(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          src={filtered[lightboxIndex].src}
          alt={filtered[lightboxIndex].alt}
          onClose={closeLightbox}
          onPrev={lightboxIndex > 0 ? goPrev : undefined}
          onNext={lightboxIndex < filtered.length - 1 ? goNext : undefined}
        />
      )}
    </section>
  );
};

export default PortfolioGrid;
