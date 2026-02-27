import { Instagram, Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Обговорення задачі",
    lines: [
      "Ви описуєте продукт і ціль зйомки: сайт, маркетплейс, реклама чи соціальні мережі.",
      "Ми уточнюємо деталі та пропонуємо оптимальний формат роботи.",
    ],
  },
  {
    number: "02",
    title: "Підготовка",
    lines: [
      "Ви можете надіслати товар поштою або ми приїжджаємо до вас із власним обладнанням.",
      "Погоджуємо стиль, фон, кількість кадрів і терміни.",
    ],
  },
  {
    number: "03",
    title: "Зйомка",
    lines: [
      "Працюємо системно та акуратно.",
      "Контролюємо світло, форму й деталі, щоб продукт виглядав професійно.",
    ],
  },
  {
    number: "04",
    title: "Обробка та передача",
    lines: [
      "Ви отримуєте готові зображення у форматі,",
      "підготовленому для сайту, маркетплейсу або реклами.",
    ],
  },
];

const Contacts = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[700px] mx-auto">

        {/* Block 1 — Header */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Як ми працюємо
          </h1>
          <p className="text-sm text-muted-foreground">
            Прозорий процес від задачі до готових зображень.
          </p>
        </section>

        {/* Block 2 — Steps */}
        <section className="mb-16 space-y-10">
          {steps.map((step) => (
            <div key={step.number}>
              <h3 className="text-base font-semibold mb-2">
                <span className="text-muted-foreground mr-2">{step.number}</span>
                {step.title}
              </h3>
              {step.lines.map((line, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Block 3 — Trust */}
        <section className="mb-16">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Працюємо по Україні та з міжнародними клієнтами.
            <br />
            Можлива відправка товарів поштою.
          </p>
        </section>

        {/* Block 4 — Trial offer */}
        <section className="mb-16 border border-border rounded-md p-6">
          <h3 className="text-base font-semibold mb-3">
            Тестова зйомка для нових клієнтів
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Для нових брендів пропонуємо тестовий формат співпраці.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Перші 5 каталожних кадрів — без оплати.
            <br />
            Це дозволяє оцінити якість і формат роботи перед масштабуванням зйомки.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Пропозиція діє для першого звернення.
          </p>
        </section>

        {/* Block 5 — CTA */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            Обговорити проєкт
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Опишіть продукт і задачу — підготуємо пропозицію та прорахунок.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="default" className="gap-2">
              <a href="mailto:promin.hello@gmail.com">
                <Mail size={16} />
                Написати на email
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a
                href="https://instagram.com/promin.photo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
                Написати в Instagram
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a
                href="https://t.me/alena_ananieva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={16} />
                Написати в Telegram
              </a>
            </Button>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contacts;
