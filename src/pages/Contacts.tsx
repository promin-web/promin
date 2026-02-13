import { useState } from "react";
import { Instagram, Mail } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Дякуємо!", description: "Ми зв'яжемося з вами найближчим часом." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-[700px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Обговорити проєкт
        </h1>
        <p className="text-sm text-muted-foreground mb-12 max-w-md">
          Опишіть задачу — відповімо з деталями та прорахунком.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mb-16">
          <Input
            placeholder="Ім'я"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-card border-border"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-card border-border"
          />
          <Textarea
            placeholder="Опишіть задачу"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="bg-card border-border resize-none"
          />
          <Button type="submit" className="w-full sm:w-auto px-8">
            Надіслати
          </Button>
        </form>

        <div className="space-y-3 text-sm">
          <a href="mailto:hello@promin.studio" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
            <span>hello@promin.studio</span>
          </a>
          <a href="https://instagram.com/promin.studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={18} />
            <span>@promin.studio</span>
          </a>
          <a href="https://threads.net/@promin.studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 1 7.38 16.75c-1.13 1.24-2.81 2.1-4.88 2.38a8.7 8.7 0 0 1-4.54-.52 6.47 6.47 0 0 1-3.4-3.2A9.77 9.77 0 0 1 5.5 13c0-2.54.84-4.6 2.4-5.93A6.65 6.65 0 0 1 12.28 5.5c2.12.08 3.74.96 4.72 2.47.9 1.38 1.22 3.13.88 4.88-.24 1.22-.87 2.13-1.72 2.52-.6.28-1.24.2-1.64-.22-.28-.3-.4-.7-.33-1.18l.72-4.3" />
              <path d="M11.5 10.5c-1.1 0-2 .9-2 2.17 0 1.28.9 2.33 2 2.33s2-.9 2-2.17" />
            </svg>
            <span>@promin.studio</span>
          </a>
        </div>
      </main>
    </>
  );
};

export default Contacts;
