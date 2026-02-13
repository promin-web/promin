import { useState } from "react";
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
          <p>
            <span className="text-muted-foreground mr-3">Email</span>
            <a href="mailto:hello@promin.studio" className="hover:underline">hello@promin.studio</a>
          </p>
          <p>
            <span className="text-muted-foreground mr-3">Instagram</span>
            <a href="https://instagram.com/promin.studio" target="_blank" rel="noopener noreferrer" className="hover:underline">
              @promin.studio
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Contacts;
