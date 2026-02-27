import Header from "@/components/Header";
import PortfolioGrid from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <section className="mb-12 md:mb-16 max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
            Предметна фотографія для брендів та бізнесу
          </h1>
          <p className="text-sm text-muted-foreground tracking-wide">
            Створюємо фото товарів для сайтів, маркетплейсів і реклами.
            <br />
            Знаходимось у Києві. Працюємо з клієнтами з усього світу.
          </p>
        </section>
        <PortfolioGrid />
      </main>
    </>
  );
};

export default Index;
