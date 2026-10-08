import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { Eyebrow, Wrap, H, CTA } from "@/components/section";
export const metadata: Metadata = {
  title: "About Intera — Design, Technology & Digital Experiences",
};
const beliefs = [
  [
    "Design should have purpose",
    "Beautiful interfaces should also solve real problems.",
  ],
  [
    "Technology should enable",
    "It should make businesses more capable, not more complicated.",
  ],
  [
    "Collaboration creates better products",
    "The best outcomes happen when clients and teams work together.",
  ],
  [
    "Keep improving",
    "Digital products should evolve with users and businesses.",
  ],
];
export default function About() {
  return (
    <>
      <Wrap>
        <Eyebrow>About</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          We turn ideas into digital experiences.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">
          Intera is a digital agency combining design, technology, and creative
          thinking to help businesses build better digital experiences.
        </p>
      </Wrap>
      <Wrap className="pt-0">
        <H>Built around people, design, and technology.</H>
        <p className="mt-4 max-w-2xl text-mute">
          Great digital products don't happen by accident. They come from
          understanding people, solving the right problems, and using technology
          thoughtfully — bringing together design, development, technology,
          strategy, and creativity.
        </p>
      </Wrap>
      <Wrap className="pt-0">
        <H>What we believe</H>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {beliefs.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line p-7">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </div>
          ))}
        </div>
      </Wrap>
      <Wrap className="pt-0">
        <H>Capabilities</H>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="flex justify-between py-5 hover:text-brand"
              >
                <span>{s.title}</span>
                <span>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Wrap>
      <CTA title="Let's build something meaningful." />
    </>
  );
}
