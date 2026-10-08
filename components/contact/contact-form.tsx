"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitInquiry } from "@/lib/contact";
const f =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-brand";
const svc = [
    "UI / UX Design",
    "Web Development",
    "Mobile App Development",
    "IT Consultant",
    "Graphic Design",
    "Other",
  ],
  bud = [
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $10,000",
    "$10,000+",
    "Not sure yet",
  ];
export function ContactForm() {
  const [s, set] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function go(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set("loading");
    const d = Object.fromEntries(new FormData(e.currentTarget)) as any;
    try {
      const r = await submitInquiry(d);
      set(r.ok ? "success" : "error");
    } catch {
      set("error");
    }
  }
  if (s === "success")
    return (
      <p role="status" className="rounded-2xl bg-tint p-8">
        Thanks — your inquiry was sent. We'll get back to you soon.
      </p>
    );
  const L = ({
    id,
    t,
    children,
  }: {
    id: string;
    t: string;
    children: React.ReactNode;
  }) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {t}
      </label>
      {children}
    </div>
  );
  return (
    <form onSubmit={go} className="space-y-5">
      <fieldset disabled={s === "loading"} className="space-y-5">
        <L id="name" t="Name">
          <input id="name" name="name" required className={f} />
        </L>
        <L id="email" t="Email">
          <input id="email" name="email" type="email" required className={f} />
        </L>
        <L id="company" t="Company">
          <input id="company" name="company" className={f} />
        </L>
        <L id="service" t="Service">
          <select id="service" name="service" className={f}>
            {svc.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </L>
        <L id="budget" t="Budget">
          <select id="budget" name="budget" className={f}>
            {bud.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </L>
        <L id="message" t="Message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={f}
          />
        </L>
      </fieldset>
      {s === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
      <Button type="submit" disabled={s === "loading"}>
        {s === "loading" ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
