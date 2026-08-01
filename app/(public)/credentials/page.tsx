import Link from "next/link";
import { buildPublicMetadata } from "@/lib/public/metadata";
import { CredentialRail } from "../_components/CredentialRail";
import { ScrollReveal } from "../_components/ScrollReveal";
import styles from "../public.module.css";

export const metadata = buildPublicMetadata({
  title: "Credentials",
  description:
    "Degrees, fellowships, hospital affiliations, and professional memberships.",
  path: "/credentials",
});

export const revalidate = 86400;

export default function CredentialsPage() {
  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <ScrollReveal>
            <p className={styles.sectionEyebrow}>Qualifications</p>
            <h1 className={styles.pageHeroTitle}>Credentials & training</h1>
            <p className={styles.pageHeroLead}>
              The full training path and professional standing — structured as a
              clinical dossier, not marketing copy.
            </p>
          </ScrollReveal>
        </div>
      </div>
      <CredentialRail expanded />
      <p className={styles.inlineCta} style={{ padding: "0 1.25rem 3rem" }}>
        <Link href="/#request-appointment">Request an appointment</Link>
      </p>
    </>
  );
}
