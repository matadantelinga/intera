import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";
import { Visual } from "./section";
export const ProjectCard = ({ p }: { p: Project }) => (
  <Link href={`/portfolio/${p.slug}`} className="group block">
    <Visual label={p.title} />
    <div className="mt-4 flex items-start justify-between">
      <div>
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="text-sm text-mute">{p.description}</p>
        <p className="mt-1 text-xs text-mute">
          {p.services.join(" · ")} · {p.year}
        </p>
      </div>
      <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
  </Link>
);
