import Header from "@/components/Header";
import PortfolioGrid from "@/components/PortfolioGrid";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <p className="text-sm text-muted-foreground tracking-wide mb-12 md:mb-16 max-w-md">
          Комерційна предметна фотографія для брендів.
          <br />
          Працюємо по Україні та з міжнародними клієнтами.
        </p>
        <PortfolioGrid />
      </main>
    </>
  );
};

export default Index;
