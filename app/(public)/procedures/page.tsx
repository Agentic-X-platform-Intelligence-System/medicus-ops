import Link from "next/link";
import { buildPublicMetadata } from "@/lib/public/metadata";
import { siteContent } from "@/lib/public/site-content";
import { ScrollReveal } from "../_components/ScrollReveal";
import styles from "../public.module.css";

export const metadata = buildPublicMetadata({
  title: "Procedures",
  description:
    "Urological procedures including robotic prostate surgery, laparoscopic nephrectomy, and kidney stone treatment.",
  path: "/procedures",
});

export const revalidate = 86400;

export default function ProceduresIndexPage() {
  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <ScrollReveal>
            <p className={styles.sectionEyebrow}>Surgical expertise</p>
            <h1 className={styles.pageHeroTitle}>Procedures</h1>
            <p className={styles.pageHeroLead}>
              Minimally invasive and endoscopic urology — each procedure has its
              own page with patient-facing detail.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className={styles.procedureIndex}>
        <ul className={styles.expertiseList}>
          {siteContent.procedures.map((procedure) => (
            <li key={procedure.slug} className={styles.expertiseItem}>
              <Link
                href={`/procedures/${procedure.slug}`}
                className={styles.expertiseLink}
              >
                <h2 className={styles.expertiseTitle}>{procedure.title}</h2>
                <p className={styles.expertiseSummary}>{procedure.summary}</p>
                <span className={styles.expertiseMore}>Read more</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
