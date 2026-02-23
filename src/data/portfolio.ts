import whiteBg1 from "@/assets/portfolio/whitebg-1.webp";
import whiteBg2 from "@/assets/portfolio/whitebg-2.webp";
import whiteBg3 from "@/assets/portfolio/whitebg-3.webp";
import whiteBg4 from "@/assets/portfolio/whitebg-4.webp";
import whiteBg5 from "@/assets/portfolio/whitebg-5.webp";
import whiteBg7 from "@/assets/portfolio/whitebg-7.webp";
import whiteBg8 from "@/assets/portfolio/whitebg-8.webp";
import whiteBg9 from "@/assets/portfolio/whitebg-9.webp";
import whiteBg10 from "@/assets/portfolio/whitebg-10.webp";
import whiteBg11 from "@/assets/portfolio/whitebg-11.webp";
import whiteBg12 from "@/assets/portfolio/whitebg-12.webp";
import whiteBg13 from "@/assets/portfolio/whitebg-13.webp";
import whiteBg14 from "@/assets/portfolio/whitebg-14.webp";
import smm1 from "@/assets/portfolio/smm-1.webp";
import smm2 from "@/assets/portfolio/smm-2.webp";
import smm3 from "@/assets/portfolio/smm-3.webp";
import smm4 from "@/assets/portfolio/smm-4.webp";
import smm5 from "@/assets/portfolio/smm-5.webp";
import smm6 from "@/assets/portfolio/smm-6.webp";
import smm7 from "@/assets/portfolio/smm-7.webp";
import smm8 from "@/assets/portfolio/smm-8.webp";
import smm9 from "@/assets/portfolio/smm-9.webp";
import smm10 from "@/assets/portfolio/smm-10.webp";
import smm11 from "@/assets/portfolio/smm-11.webp";
import smm12 from "@/assets/portfolio/smm-12.webp";
import smm13 from "@/assets/portfolio/smm-13.webp";
import smm14 from "@/assets/portfolio/smm-14.webp";
import smm15 from "@/assets/portfolio/smm-15.webp";
import smm16 from "@/assets/portfolio/smm-16.webp";
import smm17 from "@/assets/portfolio/smm-17.webp";
import smm18 from "@/assets/portfolio/smm-18.webp";
import smm19 from "@/assets/portfolio/smm-19.webp";

export type Category = "all" | "ecommerce" | "lifestyle";

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
  { key: "lifestyle", label: "Для соц. мереж" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: whiteBg1, alt: "Білий фон — Nutriplus Spirulina (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 2, src: smm1, alt: "SMM — Farmasi Lip Balm (фронт)", category: "lifestyle", aspect: "portrait" },
  { id: 13, src: whiteBg2, alt: "Білий фон — Nutriplus Spirulina (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 22, src: smm2, alt: "SMM — Farmasi Lip Balm (флетлей)", category: "lifestyle", aspect: "landscape" },
  { id: 23, src: smm3, alt: "SMM — Farmasi BB Cream", category: "lifestyle", aspect: "portrait" },
  { id: 14, src: whiteBg3, alt: "Білий фон — Nutriplus Spirulina (ракурс)", category: "ecommerce", aspect: "portrait" },
  { id: 24, src: smm4, alt: "SMM — Farmasi BB Cream (три)", category: "lifestyle", aspect: "landscape" },
  { id: 25, src: smm5, alt: "SMM — Farmasi Body Lotion", category: "lifestyle", aspect: "portrait" },
  { id: 15, src: whiteBg4, alt: "Білий фон — Farmasi Lip Balm (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 26, src: smm6, alt: "SMM — Farm Cider (світлий)", category: "lifestyle", aspect: "portrait" },
  { id: 27, src: smm7, alt: "SMM — Farm Cider (темний)", category: "lifestyle", aspect: "portrait" },
  { id: 16, src: whiteBg5, alt: "Білий фон — Farmasi Lip Balm (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 28, src: smm8, alt: "SMM — сидр наливають", category: "lifestyle", aspect: "portrait" },
  { id: 29, src: smm9, alt: "SMM — сидр та яблуко", category: "lifestyle", aspect: "portrait" },
  { id: 18, src: whiteBg7, alt: "Білий фон — Farmasi BB Cream (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 30, src: smm10, alt: "SMM — оливки Feudo Verde", category: "lifestyle", aspect: "portrait" },
  { id: 19, src: whiteBg8, alt: "Білий фон — Farmasi BB Cream (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 31, src: smm11, alt: "SMM — оливки Feudo Verde (ракурс)", category: "lifestyle", aspect: "portrait" },
  { id: 20, src: whiteBg9, alt: "Білий фон — Farmasi Body Lotion", category: "ecommerce", aspect: "portrait" },
  { id: 32, src: smm12, alt: "SMM — Fairy (ракурс)", category: "lifestyle", aspect: "portrait" },
  { id: 21, src: whiteBg10, alt: "Білий фон — Farm Cider", category: "ecommerce", aspect: "portrait" },
  { id: 33, src: smm13, alt: "SMM — Fairy з лимоном", category: "lifestyle", aspect: "portrait" },
  { id: 40, src: whiteBg11, alt: "Білий фон — Feudo Verde оливки (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 34, src: smm14, alt: "SMM — бельгійський шоколад (флетлей)", category: "lifestyle", aspect: "portrait" },
  { id: 41, src: whiteBg12, alt: "Білий фон — Feudo Verde оливки (тил)", category: "ecommerce", aspect: "portrait" },
  { id: 35, src: smm15, alt: "SMM — бельгійський шоколад (стопка)", category: "lifestyle", aspect: "portrait" },
  { id: 42, src: whiteBg13, alt: "Білий фон — Feudo Verde оливки (бік)", category: "ecommerce", aspect: "portrait" },
  { id: 36, src: smm16, alt: "SMM — Farmasi Botanics Shower Gel", category: "lifestyle", aspect: "portrait" },
  { id: 43, src: whiteBg14, alt: "Білий фон — Fairy (фронт)", category: "ecommerce", aspect: "portrait" },
  { id: 37, src: smm17, alt: "SMM — Nutriplus Spirulina (таблетки)", category: "lifestyle", aspect: "landscape" },
  { id: 38, src: smm18, alt: "SMM — Nutriplus Spirulina (з коробкою)", category: "lifestyle", aspect: "landscape" },
  { id: 39, src: smm19, alt: "SMM — Nutriplus Spirulina (святкова)", category: "lifestyle", aspect: "landscape" },
];
