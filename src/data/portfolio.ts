import whiteBg1 from "@/assets/portfolio/whitebg-1.webp";
import whiteBg2 from "@/assets/portfolio/whitebg-2.webp";
import whiteBg3 from "@/assets/portfolio/whitebg-3.webp";
import whiteBg4 from "@/assets/portfolio/whitebg-4.webp";
import whiteBg5 from "@/assets/portfolio/whitebg-5.webp";
import whiteBg6 from "@/assets/portfolio/whitebg-6.webp";
import whiteBg7 from "@/assets/portfolio/whitebg-7.webp";
import whiteBg8 from "@/assets/portfolio/whitebg-8.webp";
import whiteBg9 from "@/assets/portfolio/whitebg-9.webp";
import whiteBg10 from "@/assets/portfolio/whitebg-10.webp";
import lifestyle1 from "@/assets/portfolio/lifestyle-1.jpg";
import lifestyle2 from "@/assets/portfolio/lifestyle-2.jpg";
import lifestyle3 from "@/assets/portfolio/lifestyle-3.jpg";
import creative1 from "@/assets/portfolio/creative-1.jpg";
import creative2 from "@/assets/portfolio/creative-2.jpg";
import creative3 from "@/assets/portfolio/creative-3.jpg";
import detail1 from "@/assets/portfolio/detail-1.jpg";
import detail2 from "@/assets/portfolio/detail-2.jpg";
import detail3 from "@/assets/portfolio/detail-3.jpg";

export type Category = "all" | "ecommerce" | "lifestyle" | "creative" | "detail";

export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  aspect: "portrait" | "landscape";
}

export const categories: { key: Category; label: string }[] = [
  { key: "all", label: "Усі" },
  { key: "ecommerce", label: "Білий фон" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "creative", label: "Креативна" },
  { key: "detail", label: "Detail & Macro" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: whiteBg1, alt: "Білий фон — Nutriplus Spirulina (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 13, src: whiteBg2, alt: "Білий фон — Nutriplus Spirulina (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 14, src: whiteBg3, alt: "Білий фон — Nutriplus Spirulina (ракурс)", category: "ecommerce", aspect: "portrait" },
  { id: 15, src: whiteBg4, alt: "Білий фон — Farmasi Lip Balm (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 16, src: whiteBg5, alt: "Білий фон — Farmasi Lip Balm (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 17, src: whiteBg6, alt: "Білий фон — Farmasi Lip Balm (ракурс)", category: "ecommerce", aspect: "portrait" },
  { id: 18, src: whiteBg7, alt: "Білий фон — Farmasi BB Cream (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 19, src: whiteBg8, alt: "Білий фон — Farmasi BB Cream (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 20, src: whiteBg9, alt: "Білий фон — Farmasi Body Lotion", category: "ecommerce", aspect: "portrait" },
  { id: 21, src: whiteBg10, alt: "Білий фон — Farm Cider", category: "ecommerce", aspect: "portrait" },
  { id: 2, src: lifestyle1, alt: "Lifestyle — кава", category: "lifestyle", aspect: "portrait" },
  { id: 3, src: creative1, alt: "Рекламна зйомка — годинник", category: "creative", aspect: "portrait" },
  { id: 4, src: detail2, alt: "Macro — ювелірка", category: "detail", aspect: "landscape" },
  { id: 6, src: lifestyle2, alt: "Lifestyle — косметика", category: "lifestyle", aspect: "landscape" },
  { id: 7, src: creative2, alt: "Рекламна зйомка — косметика", category: "creative", aspect: "landscape" },
  { id: 8, src: detail1, alt: "Macro — шкіра", category: "detail", aspect: "portrait" },
  { id: 10, src: lifestyle3, alt: "Lifestyle — їжа", category: "lifestyle", aspect: "portrait" },
  { id: 11, src: creative3, alt: "Рекламна зйомка — електроніка", category: "creative", aspect: "portrait" },
  { id: 12, src: detail3, alt: "Macro — тканина", category: "detail", aspect: "landscape" },
];
