import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/lib/services";
import { getProject } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { Eyebrow, Wrap, H, CTA, Visual } from "@/components/section";
import { ProjectCard } from "@/components/cards";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const s = getService((await params).slug);
  return s
    ? {
        title: `${s.title} — Intera`,
        description: s.short,
        openGraph: { title: s.title, description: s.short },
      }
    : {};
}
export default async function Page({ params }: P) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const rel = s.relatedProjects.map(getProject).filter(Boolean) as NonNullable<
    ReturnType<typeof getProject>
  >[];
  return (
    <>
      <Wrap className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>{s.title.toUpperCase()}</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {s.headline}
          </h1>
          <p className="mt-6 text-lg text-mute">{s.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
        <Visual label={s.title} />
      </Wrap>
      <Wrap className="pt-0">
        <H>Capabilities</H>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {s.capabilities.map((c) => (
            <li
              key={c}
              className="rounded-xl border border-line px-4 py-3 text-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </Wrap>
      <Wrap className="pt-0">
        <H>Our process</H>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {s.process.map((p, i) => (
            <li key={p.title}>
              <p className="text-sm text-brand">0{i + 1}</p>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-mute">{p.description}</p>
            </li>
          ))}
        </ol>
      </Wrap>
      <Wrap className="pt-0">
        <H>What you get</H>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.benefits.map((b) => (
            <li key={b} className="rounded-xl bg-wash px-5 py-4 text-sm">
              {b}
            </li>
          ))}
        </ul>
      </Wrap>
      <Wrap className="pt-0">
        <H>Related work</H>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {rel.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Wrap>
      <Wrap className="pt-0 max-w-3xl">
        <H>FAQ</H>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {s.faqs.map((f) => (
            <details key={f.question} className="py-4">
              <summary className="cursor-pointer font-medium">
                {f.question}
              </summary>
              <p className="mt-2 text-sm text-mute">{f.answer}</p>
            </details>
          ))}
        </div>
      </Wrap>
      <CTA
        title="Ready to move your project forward?"
        text="Let's talk about your goals, challenges, and what you want to build."
      />
    </>
  );
}
