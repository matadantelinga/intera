import Link from "next/link";
import { services } from "@/lib/services";
export function Footer() {
  return (
    <footer className="border-t border-line bg-wash">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold">Intera</p>
          <p className="mt-2 text-sm text-mute">
            Digital experiences built for what's next.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium">Services</p>
          <ul className="space-y-2 text-sm text-mute">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium">Company</p>
          <ul className="space-y-2 text-sm text-mute">
            {["about", "services", "portfolio", "contact"].map((h) => (
              <li key={h}>
                <Link href={`/${h}`} className="capitalize">
                  {h}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-medium">Social</p>
          <ul className="space-y-2 text-sm text-mute">
            {["Instagram", "LinkedIn", "Dribbble", "GitHub"].map((x) => (
              <li key={x}>
                <a href="#">{x}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-mute">
        © 2026 Intera. All rights reserved.
      </p>
    </footer>
  );
}
