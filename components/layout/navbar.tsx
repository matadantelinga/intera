import Link from "next/link";
import { Button } from "@/components/ui/button";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Intera
        </Link>
        <nav
          aria-label="Main"
          className="hidden gap-7 text-sm text-mute md:flex"
        >
          {links.map(([l, h]) => (
            <Link key={h} href={h} className="hover:text-ink">
              {l}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link href="/contact">Let's Talk</Link>
        </Button>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm font-medium">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-line bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 text-sm">
              {links.map(([l, h]) => (
                <Link key={h} href={h}>
                  {l}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
