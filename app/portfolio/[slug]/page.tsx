import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/portfolio";
import { Eyebrow, Wrap, H, CTA, Visual } from "@/components/section";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () =>
  projects.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p
    ? { title: `${p.title} — Intera Portfolio`, description: p.description }
    : {};
}
export default async function Page({ params }: P) {
  const slug = (await params).slug;
  const p = getProject(slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const prev = projects[(i + projects.length - 1) % projects.length],
    next = projects[(i + 1) % projects.length];
  return (
    <>
      <Wrap>
        <Eyebrow>{p.category}</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          {p.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-mute">{p.description}</p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-mute">Client</dt>
            <dd>{p.client}</dd>
          </div>
          <div>
            <dt className="text-mute">Year</dt>
            <dd>{p.year}</dd>
          </div>
          <div>
            <dt className="text-mute">Services</dt>
            <dd>{p.services.join(" · ")}</dd>
          </div>
        </dl>
      </Wrap>
      <Wrap className="pt-0">
        <Visual label={p.title} />
      </Wrap>
      <Wrap className="pt-0">
        <Eyebrow>The problem</Eyebrow>
        <p className="max-w-2xl text-xl">{p.problem}</p>
      </Wrap>
      <Wrap className="pt-0">
        <Eyebrow>The approach</Eyebrow>
        <div className="grid gap-6 md:grid-cols-4">
          {p.approach.map((a) => (
            <div key={a.title}>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-mute">{a.description}</p>
            </div>
          ))}
        </div>
      </Wrap>
      <Wrap className="pt-0">
        <Eyebrow>The result</Eyebrow>
        <p className="max-w-2xl text-xl">{p.result}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Visual key={n} label={`${p.title} gallery ${n}`} />
          ))}
        </div>
      </Wrap>
      <Wrap className="flex justify-between pt-0 text-sm font-medium">
        <Link href={`/portfolio/${prev.slug}`}>← Previous Project</Link>
        <Link href={`/portfolio/${next.slug}`}>Next Project →</Link>
      </Wrap>
      <CTA title="Have a project like this?" text="Let's talk." />
    </>
  );
}
