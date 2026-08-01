import Link from "next/link";
import { buildPublicMetadata } from "@/lib/public/metadata";
import { siteContent, telUrl, whatsappUrl } from "@/lib/public/site-content";
import { LocationSection } from "../_components/LocationSection";
import { ScrollReveal } from "../_components/ScrollReveal";
import styles from "../public.module.css";

export const metadata = buildPublicMetadata({
  title: "Contact",
  description:
    "Clinic location, phone, WhatsApp, and hours for appointment enquiries.",
  path: "/contact",
});

export const revalidate = 86400;

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <ScrollReveal>
            <p className={styles.sectionEyebrow}>Reach the clinic</p>
            <h1 className={styles.pageHeroTitle}>Contact</h1>
            <p className={styles.pageHeroLead}>
              Call, WhatsApp, or submit an appointment request — whichever is
              easiest from your phone.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className={styles.section}>
        <ScrollReveal>
          <div className={styles.locationDetails}>
            <p className={styles.contactLine}>
              Phone: <a href={telUrl()}>{contact.phone}</a>
            </p>
            <p className={styles.contactLine}>
              WhatsApp:{" "}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                Open chat
              </a>
            </p>
            <p className={styles.contactLine}>Email: {contact.email}</p>
            <p className={styles.inlineCta}>
              <Link href="/#request-appointment">Request appointment online</Link>
            </p>
          </div>
        </ScrollReveal>
      </section>

      <LocationSection />
    </>
  );
}
