import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { name, email, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Форма сайту <onboarding@resend.dev>",
    to: "promin.hello@gmail.com",
    subject: `Новий запит від ${name}`,
    html: `
      <p><strong>Ім'я:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Повідомлення:</strong><br/>${message}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
