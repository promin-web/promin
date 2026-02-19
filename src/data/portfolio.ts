import whiteBg1 from "@/assets/creative-4.jpg";
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
  { id: 1, src: whiteBg1, alt: "Зйомка на білому фоні", category: "ecommerce", aspect: "portrait" },
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
