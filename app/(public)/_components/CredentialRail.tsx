import { siteContent } from "@/lib/public/site-content";
import { ScrollReveal } from "./ScrollReveal";
import styles from "../public.module.css";

type CredentialRailProps = {
  expanded?: boolean;
};

export function CredentialRail({ expanded = false }: CredentialRailProps) {
  const stops = expanded
    ? siteContent.credentialRail
    : siteContent.credentialRail.slice(0, 4);

  return (
    <section
      className={styles.section}
      aria-labelledby="credential-rail-heading"
    >
      <ScrollReveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Training & appointments</p>
          <h2 id="credential-rail-heading" className={styles.sectionTitle}>
            Credential rail
          </h2>
          <p className={styles.sectionLead}>
            Qualifications and affiliations — the details patients look for first
            when choosing a surgeon.
          </p>
        </div>
      </ScrollReveal>

      <ol className={styles.rail}>
        {stops.map((stop, index) => (
          <ScrollReveal key={`${stop.year}-${stop.title}`} delay={index * 80}>
            <li className={styles.railStop}>
              <span className={styles.railYear}>{stop.year}</span>
              <div className={styles.railBody}>
                <h3 className={styles.railTitle}>{stop.title}</h3>
                <p className={styles.railDetail}>{stop.detail}</p>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ol>

      {expanded && (
        <ScrollReveal>
          <div className={styles.memberships}>
            <h3 className={styles.subsectionTitle}>Professional memberships</h3>
            <ul className={styles.membershipList}>
              {siteContent.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
}
