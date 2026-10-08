import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { projects } from "@/lib/portfolio";
import { Eyebrow, Wrap, H, CTA, Visual } from "@/components/section";
import { ProjectCard } from "@/components/cards";
const why = [
  [
    "Design with purpose",
    "Beautiful interfaces should also solve real problems.",
  ],
  ["Technology that scales", "Modern technology and thoughtful architecture."],
  ["One connected team", "Design, development, and technology work together."],
  ["Business-focused thinking", "We focus on outcomes, not just deliverables."],
];
const steps = [
  ["01", "Discover", "Understand the business, users, goals, and challenges."],
  ["02", "Define", "Translate insights into strategy and product direction."],
  ["03", "Design & Build", "Turn ideas into polished, reliable products."],
  ["04", "Launch & Grow", "Launch, learn, improve, and keep evolving."],
];
export default function Home() {
  return (
    <>
      <Wrap className="grid items-center gap-12 md:grid-cols-2">
        <div className="rise">
          <Eyebrow>Design. Technology. Digital experiences.</Eyebrow>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Digital experiences built for what's next.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mute">
            Intera helps businesses turn ideas into thoughtful digital products
            through design, technology, and strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">Explore Our Work</Link>
            </Button>
          </div>
        </div>
        <Visual label="Hero composition" />
      </Wrap>
      <Wrap className="bg-wash max-w-none">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Services</Eyebrow>
          <H>What we do</H>
          <p className="mt-4 max-w-2xl text-mute">
            From strategy and design to development, we help businesses create
            digital experiences that are useful, scalable, and built to perform.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-mute">{s.short}</p>
                <p className="mt-4 text-xs text-mute">
                  {s.capabilities.slice(0, 4).join(" · ")}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Explore {s.title} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Wrap>
      <Wrap>
        <Eyebrow>About</Eyebrow>
        <H>Technology meets creativity.</H>
        <p className="mt-4 max-w-2xl text-mute">
          Intera brings together design, development, and technology to help
          businesses create digital experiences that make a difference.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-1 font-medium text-brand"
        >
          More About Intera <ArrowRight size={16} />
        </Link>
      </Wrap>
      <Wrap className="pt-0">
        <H>More than a service provider. A digital partner.</H>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {why.map(([t, d]) => (
            <div key={t} className="bg-white p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </div>
          ))}
        </div>
      </Wrap>
      <Wrap className="pt-0">
        <Eyebrow>Work</Eyebrow>
        <H>Selected work</H>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <Link
          href="/portfolio"
          className="mt-10 inline-flex items-center gap-1 font-medium text-brand"
        >
          View All Work <ArrowRight size={16} />
        </Link>
      </Wrap>
      <Wrap className="pt-0">
        <H>From idea to impact.</H>
        <ol className="mt-12 grid gap-8 border-l border-line pl-6 md:grid-cols-4 md:border-l-0 md:border-t md:pl-0 md:pt-8">
          {steps.map(([n, t, d]) => (
            <li key={n}>
              <p className="text-sm text-brand">{n}</p>
              <h3 className="mt-1 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-mute">{d}</p>
            </li>
          ))}
        </ol>
      </Wrap>
      <CTA />
    </>
  );
}
