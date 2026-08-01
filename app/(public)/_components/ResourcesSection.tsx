import Link from "next/link";
import { siteContent } from "@/lib/public/site-content";
import { ScrollReveal } from "./ScrollReveal";
import styles from "../public.module.css";

export function ResourcesSection() {
  return (
    <section
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="resources-heading"
    >
      <ScrollReveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Patient resources</p>
          <h2 id="resources-heading" className={styles.sectionTitle}>
            Understand your condition
          </h2>
          <p className={styles.sectionLead}>
            Plain-language explainers — also the strongest SEO entry points for
            patients searching from their phone.
          </p>
        </div>
      </ScrollReveal>

      <ul className={styles.resourceGrid}>
        {siteContent.conditions.map((condition, index) => (
          <ScrollReveal key={condition.slug} delay={index * 50}>
            <li>
              <Link
                href={`/conditions/${condition.slug}`}
                className={styles.resourceCard}
              >
                <h3 className={styles.resourceTitle}>{condition.title}</h3>
                <p className={styles.resourceSummary}>{condition.summary}</p>
              </Link>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
