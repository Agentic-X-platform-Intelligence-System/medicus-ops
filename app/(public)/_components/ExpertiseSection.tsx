import Link from "next/link";
import { siteContent } from "@/lib/public/site-content";
import { ScrollReveal } from "./ScrollReveal";
import styles from "../public.module.css";

export function ExpertiseSection() {
  return (
    <section className={styles.section} aria-labelledby="expertise-heading">
      <ScrollReveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Areas of expertise</p>
          <h2 id="expertise-heading" className={styles.sectionTitle}>
            Procedures performed
          </h2>
          <p className={styles.sectionLead}>
            Substantive surgical work — not icon tiles. Each link opens a
            dedicated page with plain-language detail.
          </p>
        </div>
      </ScrollReveal>

      <ul className={styles.expertiseList}>
        {siteContent.procedures.map((procedure, index) => (
          <ScrollReveal key={procedure.slug} delay={index * 60}>
            <li className={styles.expertiseItem}>
              <Link href={`/procedures/${procedure.slug}`} className={styles.expertiseLink}>
                <h3 className={styles.expertiseTitle}>{procedure.title}</h3>
                <p className={styles.expertiseSummary}>{procedure.summary}</p>
                <span className={styles.expertiseMore}>Read more</span>
              </Link>
            </li>
          </ScrollReveal>
        ))}
      </ul>

      <ScrollReveal>
        <p className={styles.inlineCta}>
          <Link href="/procedures">View all procedures</Link>
        </p>
      </ScrollReveal>
    </section>
  );
}
