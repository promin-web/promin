import Header from "@/components/Header";
import PortfolioGrid from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <p className="text-sm text-muted-foreground tracking-wide mb-12 md:mb-16 max-w-md">
          <strong>Предметна фотографія для брендів та бізнесу.</strong>
          <br />
          Створюємо фото товарів для сайтів, маркетплейсів і реклами.
          <br />
          Знаходимось у Києві. Працюємо з клієнтами з усього світу.
        </p>
        <PortfolioGrid />
      </main>
    </>
  );
};

export default Index;
