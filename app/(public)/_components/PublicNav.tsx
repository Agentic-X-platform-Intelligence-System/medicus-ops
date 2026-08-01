import Link from "next/link";
import { siteContent } from "@/lib/public/site-content";
import styles from "../public.module.css";

const navLinks = [
  { href: "/procedures", label: "Procedures" },
  { href: "/conditions/kidney-stones", label: "Conditions" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export function PublicNav() {
  const { doctor } = siteContent;

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.wordmark}>
          {doctor.name.split(",")[0]}
        </Link>
        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
