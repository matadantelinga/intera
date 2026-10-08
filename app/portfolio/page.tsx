import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/portfolio";
import { Eyebrow, Wrap } from "@/components/section";
import { ProjectCard } from "@/components/cards";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Intera Portfolio — Selected Digital Work",
};
const cats = [
  "All",
  "UI / UX",
  "Web Development",
  "Mobile App",
  "IT Consulting",
  "Graphic Design",
];
export default async function Portfolio({
  searchParams,
}: {
  searchParams: Promise<{ c?: string }>;
}) {
  const c = (await searchParams).c ?? "All";
  const list =
    c === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === c ||
            p.services.some((s) => s.startsWith(c.split(" ")[0])),
        );
  return (
    <Wrap>
      <Eyebrow>Portfolio</Eyebrow>
      <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
        Our work
      </h1>
      <p className="mt-6 max-w-xl text-lg text-mute">
        A selection of digital experiences, products, and brands we've helped
        bring to life.
      </p>
      <nav aria-label="Filter" className="mt-10 flex flex-wrap gap-2">
        {cats.map((x) => (
          <Link
            key={x}
            href={
              x === "All"
                ? "/portfolio"
                : `/portfolio?c=${encodeURIComponent(x)}`
            }
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm",
              x === c
                ? "border-ink bg-ink text-white"
                : "border-line text-mute hover:border-ink",
            )}
          >
            {x}
          </Link>
        ))}
      </nav>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
      {!list.length && (
        <p className="mt-10 text-mute">No projects in this category yet.</p>
      )}
    </Wrap>
  );
}
