import type { Metadata } from "next";
import { Eyebrow, Wrap } from "@/components/section";
import { ContactForm } from "@/components/contact/contact-form";
export const metadata: Metadata = {
  title: "Contact Intera — Let's Build Something Together",
};
export default function Contact() {
  return (
    <Wrap>
      <Eyebrow>Contact</Eyebrow>
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
        Let's build something together.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-mute">
        Have an idea, a project, or a challenge you'd like to discuss? Tell us a
        little about it and we'll get back to you.
      </p>
      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Let's talk</h2>
          <p>hello@intera.dev</p>
          <p className="text-mute">Indonesia</p>
          <p className="text-sm text-mute">
            Instagram · LinkedIn · Dribbble · GitHub
          </p>
        </div>
        <ContactForm />
      </div>
    </Wrap>
  );
}
